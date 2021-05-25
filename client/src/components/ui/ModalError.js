export default function ModalError({ head, body, foot }) {
  const renderHead = () => {
    return (
      <div className='modal-header'>
        <h5 className='modal-title' id='exampleModalLabel'>{head}</h5>
        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
      </div>
    )
  }

  const renderBody = () => {
    return (
      <div className='modal-body'>
        {body}
      </div>
    )
  }

  const renderFoot = () => {
    return (
      <div className='modal-footer'>
        {foot}
      </div>
    )
  }

  const renderModal = () => {

    return (
      <div className='__modal'>
        <div className='__modal-content __modal_small-width'>
          <div className='modal-dialog modal-dialog-centered'>
            <div className='modal-content'>
              {renderHead()}
              {renderBody()}
              {renderFoot()}
            </div>
          </div>
        </div>
      </div>
    )
  }
  return renderModal()
}
