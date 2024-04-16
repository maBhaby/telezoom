import { useForm } from "vee-validate"
import { userLoginScheme } from "../config/schemes";

export const useLoginUserForm = () => {
  const formCtx = useForm({
    validateOnMount: false,
    initialValues: {
      rememberMe: false,
      email: '',
      password: ''
    },
    validationSchema: userLoginScheme
  })

  const handleLoginUser = formCtx.handleSubmit(async (values, ctx) => {
    console.log('values', values);
    console.log('ctx', ctx);
    const res = await new Promise((res) => {
      setTimeout(() => {res('succes')}, 5000)
    })
    console.log(res, 'res');
    
  })

  return {
    formCtx,
    handleLoginUser
  }
}
