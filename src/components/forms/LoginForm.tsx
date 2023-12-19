//creating a login component page
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {
  Button,
  InputContainer,
  InputField,
  InputLabel,
} from '../../utils/styles';
import styles from './index.module.scss';

export const LoginForm = () => {
  const {register, handleSubmit, formState: {errors},} = useForm(); 
  console.log(errors);
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputLabel htmlFor="email" >Email</InputLabel>
        <InputField type="email" id="email" {...register('email', {required: true,} )}/>
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField type="password" id="password"{...register('password', {required: true,} )} />
      </InputContainer>
      <Button className={styles.button}>Log In</Button>
      <div className= {styles.footerText}>
        <span>Don't have an account?</span>
        <Link to="/register">
          <span>Sign up</span>
        </Link>
      </div>
       
    </form>
  );
};
