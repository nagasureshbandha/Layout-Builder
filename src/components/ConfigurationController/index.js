import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = () => {
        onToggleShowContent()
      }
      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="configuratio-controls-container">
          <div className="responsive-controls-container">
            <h1 className="heading">Layout</h1>
            <div className="checkbox-group">
              <div className="checkbox-container">
                <input
                  onChange={onChangeContent}
                  checked={showContent}
                  type="checkbox"
                  id="content"
                />
                <label className="label-text" htmlFor="content">
                  Content
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  checked={showLeftNavbar}
                  type="checkbox"
                  id="leftNavbar"
                  onChange={onChangeLeftNavbar}
                />
                <label className="label-text" htmlFor="leftNavbar">
                  Left Navbar
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  checked={showRightNavbar}
                  type="checkbox"
                  id="rightNavbar"
                  onChange={onChangeRightNavbar}
                />
                <label className="label-text" htmlFor="rightNavbar">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
