import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {Modal, Button} from 'react-bootstrap'
import {Input,Form} from 'antd'
import {useSelector} from 'react-redux'
import {toAbsoluteUrl, toAbsoluteAvatarUrl} from '../../../../_metronic/_helpers'
import SVG from 'react-inlinesvg'
import {FormattedMessage, injectIntl} from 'react-intl'
import {requestPOST, GLOBAL_URL} from '../../../basic/basicApi'
const NewPost = props => {
  const {user} = useSelector(state => state.auth)
  const [contentData, setContentData] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  useEffect(() => {
    return () => {}
  }, [])
  const handlePost = async () => {
    var newData = {
      contentData: contentData,
      groupId: 151,
      attachments: [
        {
          id: 6,
        },
      ],
    }
    console.log(newData)
    var result = await requestPOST(`${GLOBAL_URL}v1/post/CreatePost`, newData).then(res => {
      return res;
    });
    console.log(result)
    setModalVisible(false)
  }
  return (
    <div className='card gutter-b feed-item'>
      <div className='card-body p-4'>
        {/*begin::Top*/}
        <div className='d-flex align-items-center'>
          <div className='symbol symbol-40 symbol-light-success mr-5'>
            <div className='symbol-label' style={{backgroundImage: `url(${toAbsoluteAvatarUrl(user.avatarUrl)})`}} />
          </div>
          <input
            placeholder={`${user.fullName} ơi, bạn đang nghĩ gì thế?`}
            type='text'
            className='form-control border-0 p-0'
            onClick={() => {
              setModalVisible(true)
            }}
          />
        </div>
        <hr />
        <div className='d-flex align-items-center'>
          <div className='btn btn-hover-text-primary btn-hover-icon-primary btn-sm btn-text-dark-50 bg-hover-light-primary rounded font-weight-bolder font-size-sm p-2 mr-2'>
            <span className='svg-icon svg-icon-xl'>
              <SVG src={toAbsoluteUrl('/media/svg/icons/Design/Image.svg')} />
            </span>
            <FormattedMessage id='NEWSFEED.MENU.PHOTO_VIDEO' />
          </div>
          {/*<div className="btn btn-hover-text-primary btn-hover-icon-primary btn-sm btn-text-dark-50 bg-hover-light-primary rounded font-weight-bolder font-size-sm p-2 mr-2">
            <span className="svg-icon svg-icon-xl">
              <SVG src={toAbsoluteUrl('/media/svg/icons/Communication/Add-user.svg')} />
            </span>
            <FormattedMessage id="NEWSFEED.MENU.TAG_FRIEND" />
          </div>
          <div className="btn btn-hover-text-primary btn-hover-icon-primary btn-sm btn-text-dark-50 bg-hover-light-primary rounded font-weight-bolder font-size-sm p-2 mr-2">
            <span className="svg-icon svg-icon-xl">
              <SVG src={toAbsoluteUrl('/media/svg/icons/General/Smile.svg')} />
            </span>
            <FormattedMessage id="NEWSFEED.MENU.FEELING_ACTIVITY" />
  </div> */}
          <div className='btn btn-hover-text-primary btn-hover-icon-primary btn-sm btn-text-dark-50 bg-hover-light-primary rounded font-weight-bolder font-size-sm p-2 mr-2'>
            <span className='svg-icon svg-icon-xl'>
              <SVG src={toAbsoluteUrl('/media/svg/icons/Communication/Group.svg')} />
            </span>
            <FormattedMessage id='NEWSFEED.MENU.GROUP' />
          </div>
        </div>
        {/*end::Top*/}
        {/*begin::Form*/}
        {/*end::Form*/}
      </div>
      <Modal
        show={modalVisible}
        onHide={() => setModalVisible(false)}
        aria-labelledby='example-custom-modal-styling-title'
        dialogClassName='modal-50w'
        scrollable={true}>
        <Modal.Header closeButton style={{height: '20%'}}>
          <Modal.Title id='example-custom-modal-styling-title'>Viết chia sẻ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='d-flex align-items-center'>
            <div className='symbol symbol-40 symbol-light-success mr-5'>
              <div className='symbol-label' style={{backgroundImage: `url(${toAbsoluteAvatarUrl(user.avatarUrl)})`}} />
            </div>
            <Input placeholder="Bạn nhập nội dung bài viết vào đây..." bordered={false} onChange={(e)=>{setContentData(e.target.value)}}/>,
          </div>
        </Modal.Body>
        <Modal.Footer style={{height: '30%', padding: 5}}>
          <div>
            <div className='btn btn-hover-text-primary btn-hover-icon-primary btn-sm btn-text-dark-50 bg-hover-light-primary rounded font-weight-bolder font-size-sm p-2 mr-2'>
              <span className='svg-icon svg-icon-xl'>
                <SVG src={toAbsoluteUrl('/media/svg/icons/Design/Image.svg')} />
              </span>
              <FormattedMessage id='NEWSFEED.MENU.PHOTO_VIDEO' />
            </div>
            <div className='btn btn-hover-text-primary btn-hover-icon-primary btn-sm btn-text-dark-50 bg-hover-light-primary rounded font-weight-bolder font-size-sm p-2 mr-2'>
              <span className='svg-icon svg-icon-xl'>
                <SVG src={toAbsoluteUrl('/media/svg/icons/Communication/Group.svg')} />
              </span>
              <FormattedMessage id='NEWSFEED.MENU.GROUP' />
            </div>
          </div>
          <Button
            style={{width: '60%', height: '60%'}}
            onClick={() => {
              handlePost()
            }}>
            Chia sẻ
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

NewPost.propTypes = {}

export default NewPost;
