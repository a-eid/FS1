import React from "react"
import Switch from "react-switch"

export default ({ checked, name, onChange }) => (
  <Switch
    onColor="#fff"
    onHandleColor="#27ae60"
    offColor="#fff"
    offHandleColor="#fafafa"
    handleDiameter={30}
    uncheckedIcon={false}
    checkedIcon={false}
    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
    height={12}
    width={35}
    className="react-switch"
    id="material-switch"
    onChange={checked => onChange(name, checked)}
    checked={checked}
  />
)
