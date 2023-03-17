import React from 'react';
import * as yup from 'yup'

const passwordRuled = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const UserForm = yup.object().shape({
    firstName: yup.string().required('required'),
    lastName: yup.string().required('required'),
    dob: yup.string().required('required'),
    email: yup.string().email('Enter Valid Email').required('required'),
    password: yup.string().min(3).matches(passwordRuled, { message: 'Please create a strong password' }).required(),
    phone: yup.number().positive().integer().required('required'),
    resident: yup.object().shape({
        country: yup.string().required('required'),
        state: yup.string().required('required'),
        city: yup.string().required('required'),
        zip: yup.string().max(5).min(3).required('required'),
        address: yup.string().required('required'),
    }).required('required'),

})

