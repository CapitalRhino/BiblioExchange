import React from 'react'

function PasswordToggle({ params }) {
    const { id, pwd, setPwd, describedby, validPwd, setPwdFocus } = params
    return (
        <div className="passwordShow">
        <input
            type="password"
            id={id}
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby={describedby}
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
        />
        <button>t</button>
        </div>
    )
}

export default PasswordToggle