import * as Yup from 'yup';

// -- edit profile rules --
const loginValidationSchema = Yup.object().shape({
    username: Yup.string()
        .required('username tidak boleh kosong'),

    password: Yup.string()
        .required('password tidak boleh kosong'),
});

export default loginValidationSchema;