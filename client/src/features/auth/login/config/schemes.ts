import { ERRORS_MSG } from '@/shared/config/messages'
import * as yup from 'yup'

export const userLoginScheme = yup.object().shape({
  email: yup.string().required(ERRORS_MSG.REQUIRED).email(ERRORS_MSG.EMAIL),
  password: yup.string().required(ERRORS_MSG.REQUIRED)
})
