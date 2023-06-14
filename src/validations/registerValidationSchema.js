import * as Yup from 'yup';

// -- edit profile rules --
const registerValidationSchema = Yup.object().shape({
    email: Yup.string()
        .required('email tidak boleh kosong')
        .min(4, 'minimal 4 karakter')
        .max(80, 'maksimal 80 karakter'),

    username: Yup.string()
        .required('username tidak boleh kosong')
        .min(4, 'minimal 4 karakter')
        .max(64, 'maksimal 64 karakter'),

    password: Yup.string()
        .required('password tidak boleh kosong')
        .min(4, 'minimal 4 karakter')
        .max(100, 'maksimal 100 karakter'),

    full_name: Yup.string()
        .required('nama lengkap tidak boleh kosong')
        .max(100, 'maksimal 100 karakter'),

    birthdate: Yup.string()
        .required('tanggal lahir tidak boleh kosong'),

    gender: Yup.string()
        .required('jenis kelamin tidak boleh kosong'),
});

export default registerValidationSchema;