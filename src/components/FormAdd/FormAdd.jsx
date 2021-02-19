import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { REG_EMAIL, REG_NUMBER, REG_PHONE, REG_WORD } from '../../constants/constants';
import { addContact } from '../../store/actions/actions';

import ValidInput from './ValidInput';
import PhoneInput from './PhoneInput';
import Button from '../generic/Button';

import './FormAdd.scss';


const FormAdd = () => {
  const initContactDetails = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: {},
    description: '',
  }
  const initWarningMessage = {
    id: false,
    firstName: false,
    lastName: false,
    email: false,
    phone: false
  }

  const dispatch = useDispatch();
  const [warningMessage, setWarningMessage] = useState(initWarningMessage);
  const [isFormHidden, setIsFormHidden] = useState(true);
  const [contactDetails, setContactDetails] = useState(initContactDetails);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if ( validateForm() ) {
      setContactDetails(initContactDetails);
      dispatch( addContact(contactDetails) );
      setWarningMessage(initWarningMessage);
    }
  }

  const inputChangeHandler = (event) => {
    setContactDetails(state => {
      return {
        ...state,
        [event.target.name]: event.target.value
      }
    })
  }

  const validateForm = () => {
    const isValidID = REG_NUMBER.test(contactDetails.id);
    const isValidFirstName = REG_WORD.test(contactDetails.firstName);
    const isValidLastName = REG_WORD.test(contactDetails.lastName);
    const isValidEmail = REG_EMAIL.test(contactDetails.email);
    const isValidPhone = REG_PHONE.test(contactDetails.phone);

    setWarningMessage({
      id: !isValidID,
      firstName: !isValidFirstName,
      lastName: !isValidLastName,
      email: !isValidEmail,
      phone: !isValidPhone
    });

    return isValidID && isValidFirstName && isValidLastName && isValidEmail && isValidPhone;
  }

  return (
    <div>
      <Button
        className="btn"
        type="button"
        description={isFormHidden ? 'show add form' : 'hide add form'}
        handler={ () => setIsFormHidden(state => !state) }
      />
      <form
        className={isFormHidden ? 'form-add hidden' : 'form-add'}
        onSubmit={formSubmitHandler}
      >
        <ValidInput
          className="form-add__input"
          id="id"
          name="id"
          value={contactDetails.id}
          placeholder="id"
          showWarningMessage={warningMessage.id}
          warningMessage="id должен состоять только из цифр"
          handler={inputChangeHandler}
        />
        <ValidInput
          className="form-add__input"
          id="firstName"
          name="firstName"
          value={contactDetails.firstName}
          placeholder="firstName"
          showWarningMessage={warningMessage.firstName}
          warningMessage="name может содержать только буквы"
          handler={inputChangeHandler}
        />
        <ValidInput
          className="form-add__input"
          id="lastName"
          name="lastName"
          value={contactDetails.lastName}
          placeholder="lastName"
          showWarningMessage={warningMessage.lastName}
          warningMessage="name может содержать только буквы"
          handler={inputChangeHandler}
        />
        <ValidInput
          className="form-add__input"
          id="email"
          name="email"
          value={contactDetails.email}
          placeholder="email"
          showWarningMessage={warningMessage.email}
          warningMessage="email должен соответствовать формату mail@mail.com"
          handler={inputChangeHandler}
        />
        <PhoneInput
          className="form-add__input"
          id="phone"
          name="phone"
          value={contactDetails.phone}
          placeholder="phone"
          showWarningMessage={warningMessage.phone}
          warningMessage="поле номер телефона должно быть заполнено"
          handler={inputChangeHandler}
        />
        <Button
          type="submit"
          description="add"
          className="btn form-add__btn"
        />
      </form>
    </div>
  )
};

export default FormAdd;