/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
/* eslint-disable no-useless-escape */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import { Fade } from 'react-awesome-reveal';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as emailjs from '@emailjs/browser';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ToastContainer, toast } from 'react-toastify';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-toastify/dist/ReactToastify.css';

import { Form } from 'elements/Form';
import Button from 'elements/Button';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebaseConfig';

export const DiscussForm = (actions) => {
  const { data, resetForm, text } = actions;
  const submitEmail = async () => {
    const {
      name, company, email, phone, projectIdea,
    } = data;

    const templateParams = {
      from_name: `${name} - ${company} ( ${phone} - ${email} )`,
      to_name: 'SBH',
      message: projectIdea,
    };

    if (
      name !== ''
      // && company !== ''
      && email !== ''
      && phone !== ''
      // && projectIdea !== ''
    ) {
      // Add a new document in collection "contacts"
      try {
        if (projectIdea === '') {
          templateParams.message = 'No message entered';
        }
        await addDoc(collection(db, "contacts"), {
          name,
          email,
          phone,
          company,
          projectIdea,
          createdAt: serverTimestamp(), // Optional: store the submit timestamp
        });
        emailjs.send(
          'service_nh3qpeo',
          'template_cl95ncj',
          templateParams, {
            publicKey: 'rKj7eMi6MOmYV3Te9',
          },
        )
          .then(() => {
            toast.success(text.successMessage);
            resetForm();
          }, (error) => {
            toast.error(error);
          });
      } catch (error) {
        toast.error(error);
      }
    } else {
      toast.error(text.errorMessage);
    }
  };

  return (
    <section className="flex flex-col container mx-auto mt-10 justify-center">

      <Fade direction="down" triggerOnce>
        <h1 className="text-5xl text-theme-blue text-center font-bold">{ text.title }</h1>
      </Fade>

      <Fade direction="up" triggerOnce>
        <p className="font-light text-lg text-gray-400 text-center mb-12">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
{ text.description }        </p>
      </Fade>

      <Fade direction="up" triggerOnce>
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row mx-auto">
            <Form
              id="name"
              name="name"
              type="text"
              value={data.name}
              placeholder={text.form.name}
              className=""
              onChange={actions.onChange}
            />
            <Form
              id="company"
              name="company"
              type="text"
              value={data.company}
              placeholder={text.form.company}
              className=""
              onChange={actions.onChange}
            />
          </div>

          <div className="flex flex-col sm:flex-row mx-auto">
            <Form
              id="email"
              name="email"
              type="email"
              value={data.email}
              placeholder={text.form.email}
              className=""
              onChange={actions.onChange}
            />
            <Form
              id="phone"
              name="phone"
              type="number"
              value={data.phone}
              placeholder={text.form.phone}
              className=""
              onChange={actions.onChange}
            />
          </div>

          <div className="mx-auto">
            <Form
              id="projectIdea"
              name="projectIdea"
              type="textarea"
              value={data.projectIdea}
              placeholder={text.form.projectIdea}
              className=""
              onChange={actions.onChange}
            />
          </div>
          <Button
            className="text-xl mx-auto px-12 py-3 mt-5 bg-theme-blue text-white rounded-full border-2 border-theme-blue hover:bg-dark-theme-blue border-purple-800 transition duration-200 focus:outline-none"
            type="button"
            onClick={submitEmail}
          >
            {text.form.submit}
          </Button>
        </div>
      </Fade>

      <ToastContainer />

    </section>
  );
};
