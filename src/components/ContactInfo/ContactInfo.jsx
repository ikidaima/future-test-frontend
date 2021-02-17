import React from 'react';
import { useSelector } from 'react-redux';

import './ContactInfo.scss';

const ContactInfo = () => {
  const selectedContact = useSelector(state => state.selectedContact);

  if (selectedContact) {
    return (
      <div className="contact-info">
        <p className="contact-info__item">
          Выбран пользователь: <b>{selectedContact.firstName + ' ' + selectedContact.lastName}</b>
        </p>
        <p className="contact-info__item">Описание:&ensp;
          <textarea
            className="contact-info__description"
            readOnly
            value={selectedContact.description}
          />
        </p>
        <p className="contact-info__item">
          Адрес проживания: <b>{selectedContact.address.streetAddress}</b>
        </p>
        <p className="contact-info__item">
          Город: <b>{selectedContact.address.city}</b>
        </p>
        <p className="contact-info__item">
          Провинция/штат: <b>{selectedContact.address.state}</b>
        </p>
        <p className="contact-info__item">
          Индекс: <b>{selectedContact.address.zip}</b>
        </p>
      </div>
    )
  }

  return null;
}

export default ContactInfo;