import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { emailSignInStart, googleSignInStart } from './../../redux/User/user.actions'


import './styles.scss'
import Buttons from './../forms/Button'
// import { signInWithGoogle, auth } from './../../firebase/utils'

import AuthWrapper from './../AuthWrapper'
import FormInput from './../forms/FormInput'
import Button from './../forms/Button'


 
const mapState = ({user}) => ({
    currentUser: user.currentUser
})


const SignIn = props => {
    const history = useHistory()
    const dispatch = useDispatch()
    const{ currentUser } = useSelector(mapState)
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')


    useEffect(()=>{
        if(currentUser){
            resetForm()
            // dispatch(resetAllAuthForms())
            history.push('/')
        }
    },[currentUser])


    const resetForm = () => {
        setEmail('')
        setPassword('')
    }
    
    const handleSubmit =  e => {
        e.preventDefault()
        dispatch(emailSignInStart({ email, password }))

        //     resetForm()
        //     props.history.push('/')
  
    }

    const handleGoogleSignIn = () => {
        dispatch(googleSignInStart())
    }




        const  configAuthWrapper = {
            headline: 'LogIn'
        }

        return (

            <AuthWrapper {... configAuthWrapper}>
 
                        <div className="formWrap">
                        <form onSubmit={handleSubmit}>

                            <FormInput
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Email"
                                handleChange={e => setEmail(e.target.value)}
                            />
                            <FormInput
                                type="password"
                                name="password"
                                value={password}
                                placeholder="Password"
                                handleChange={e => setPassword(e.target.value)} 
                            />
                            <Button type="submit ">
                                Login
                            </Button>
                            
                            <div className="socialSignin">
                                <div className="row">
                                    <Buttons onClick={handleGoogleSignIn}>
                                        Sign in with Google
                                    </Buttons>
                                </div>
                            </div>

                            <div className="links">
                                <Link to="/recovery">
                                    Reset Password
                                </Link>
                            </div>
                        </form>
                        </div>
            </AuthWrapper>
        )
}

export default SignIn