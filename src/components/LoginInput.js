import React, {useEffect} from 'react'

export default function LoginInput() {
  useEffect(() => {
    console.log('mounted')
  }, [])

    return (
        <div>
            <input name="email" />
            <input name="password" />
            <button>Log In</button>
        </div>
    )
}
