import classNames from "classnames"
import { useRef, useState } from "react"
import { InputCheckboxComponent } from "./types"
import { useCustomFetch } from "src/hooks/useCustomFetch"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)

  const [ischecked, setIsChecked] = useState<Boolean>(checked)
  const { clearCache } = useCustomFetch()

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": ischecked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
      />
      <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={checked}
        disabled={disabled}
        onChange={() => {
          onChange(!checked)
          setIsChecked(!ischecked)
          clearCache();
        }}
      />
    </div>
  )
}
