import React, { useEffect,useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

import { Lang, useFormInputValidation } from "react-form-input-validation";


const Formvalidate = () => {
  const [fields, errors, form] = useFormInputValidation(
    {
      customer_name: "",
      email_address: "",
      password: "",
      password_confirmation: "",
      phone_number: "",
      pickup_time: "",
      taxi: "",
      pickup_place: "",
      comments: "",
      dropoff_place: "",
      extras: []
    },
    {
      customer_name: "required|username_available",
      email_address: "required|email",
      password: "required|confirmed",
      password_confirmation: "required|same:password",
      phone_number: "required|numeric|digits_between:10,12",
      pickup_time: "required|date",
      taxi: "required",
      pickup_place: "required",
      comments: "required|max:20",
      dropoff_place: "required",
      extras: "required|array"
    }
  );

  useEffect(() => {
    form.registerAsync("username_available", function (
      username,
      attribute,
      req,
      passes
    ) {
      setTimeout(() => {
        if (username === "foo")
          passes(false, "Username has already been taken.");
        // if username is not available
        else passes();
      }, 1000);
    });
  }, []);

  form.useLang(Lang.en);

  // let messages = form.getMessages(Lang.en);
  // console.log(messages);

  const onSubmit = async (event) => {
    const isValid = await form.validate(event);
    if (isValid) {
      console.log("MAKE AN API CALL", fields, errors);
    }
  };

  useEffect(() => {
    if (form.isValidForm) {
      console.log("MAKE AN API CALL ==> useEffect", fields, errors, form);
    }
  }, []);

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h3>React Form Input Validation - useFormInputValidation - Hook</h3>
      <form
        className="myForm"
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <p>
          <label>
            Name
            <input
              type="text"
              name="customer_name"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.customer_name}
              // To override the attribute name
              data-attribute-name="Customer Name"
              data-async
            />
          </label>
          <label className="error">
            {errors.customer_name ? errors.customer_name : ""}
          </label>
        </p>

        <p>
          <label>
            Phone
            <input
              type="tel"
              name="phone_number"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.phone_number}
            />
          </label>
          <label className="error">
            {errors.phone_number ? errors.phone_number : ""}
          </label>
        </p>

        <p>
          <label>
            Email
            <input
              type="email"
              name="email_address"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.email_address}
            />
          </label>
          <label className="error">
            {errors.email_address ? errors.email_address : ""}
          </label>
        </p>

        <p>
          <label>
            Password
            <input
              type="text"
              name="password"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.password}
            />
          </label>
          <label className="error">
            {errors.password ? errors.password : ""}
          </label>
        </p>

        <p>
          <label>
            Confirm Password
            <input
              type="text"
              name="password_confirmation"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.password_confirmation}
            />
          </label>
          <label className="error">
            {errors.password_confirmation ? errors.password_confirmation : ""}
          </label>
        </p>

        <fieldset>
          <legend>Which taxi do you require?</legend>
          <p>
            <label className="choice">
              {" "}
              <input
                type="radio"
                name="taxi"
                onChange={form.handleChangeEvent}
                value="car"
              />{" "}
              Car{" "}
            </label>
          </p>
          <p>
            <label className="choice">
              {" "}
              <input
                type="radio"
                name="taxi"
                onChange={form.handleChangeEvent}
                value="van"
              />{" "}
              Van{" "}
            </label>
          </p>
          <p>
            <label className="choice">
              {" "}
              <input
                type="radio"
                name="taxi"
                onChange={form.handleChangeEvent}
                value="tuk tuk"
              />{" "}
              Tuk Tuk{" "}
            </label>
          </p>
          <label className="error">{errors.taxi ? errors.taxi : ""}</label>
        </fieldset>

        <fieldset>
          <legend>Extras</legend>
          <p>
            <label className="choice">
              {" "}
              <input
                type="checkbox"
                name="extras"
                onChange={form.handleChangeEvent}
                value="baby"
              />{" "}
              Baby Seat{" "}
            </label>
          </p>
          <p>
            <label className="choice">
              {" "}
              <input
                type="checkbox"
                name="extras"
                onChange={form.handleChangeEvent}
                value="wheelchair"
              />{" "}
              Wheelchair Access{" "}
            </label>
          </p>
          <p>
            <label className="choice">
              {" "}
              <input
                type="checkbox"
                name="extras"
                onChange={form.handleChangeEvent}
                value="tip"
              />{" "}
              Stock Tip{" "}
            </label>
          </p>
          <label className="error">{errors.extras ? errors.extras : ""}</label>
        </fieldset>

        <p>
          <label>
            Pickup Date
            <input
              type="date"
              name="pickup_time"
              onChange={form.handleChangeEvent}
              // onBlur={form.handleBlurEvent}
              value={fields.pickup_time}
            />
          </label>
          <label className="error">
            {errors.pickup_time ? errors.pickup_time : ""}
          </label>
        </p>

        <p>
          <label>
            Pickup Place
            <select
              id="pickup_place"
              name="pickup_place"
              value={fields.pickup_place}
              onChange={form.handleChangeEvent}
              onBlur={form.handleBlurEvent}
            >
              <option value="">Select One</option>
              <option value="office">Taxi Office</option>
              <option value="town_hall">Town Hall</option>
              <option value="telepathy">We'll Guess!</option>
            </select>
          </label>
          <label className="error">
            {errors.pickup_place ? errors.pickup_place : ""}
          </label>
        </p>

        <p>
          <label>
            Dropoff Place
            <input
              type="text"
              name="dropoff_place"
              value={fields.dropoff_place}
              onChange={form.handleChangeEvent}
              onBlur={form.handleBlurEvent}
              list="destinations"
            />
          </label>

          <datalist id="destinations">
            <option value="Airport" />
            <option value="Beach" />
            <option value="Fred Flinstone's House" />
          </datalist>
          <label className="error">
            {errors.dropoff_place ? errors.dropoff_place : ""}
          </label>
        </p>

        <p>
          <label>
            Special Instructions
            <textarea
              name="comments"
              maxLength="20"
              value={fields.comments}
              onChange={form.handleChangeEvent}
              onBlur={form.handleBlurEvent}
            ></textarea>
          </label>
          <label className="error">
            {errors.comments ? errors.comments : ""}
          </label>
        </p>

        <p>
          <button type="submit">Submit Booking</button>
        </p>
      </form>

      <BForm />
    </div>
  );
};

export default Formvalidate;


function BForm() {
    
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    const [fields, errors, form] = useFormInputValidation(
        {
          customer_name: "",
          email_address: "",
          password: "",
          password_confirmation: "",
          phone_number: "",
          pickup_time: "",
          taxi: "",
          pickup_place: "",
          comments: "",
          dropoff_place: "",
          extras: []
        },
        {
          customer_name: "required|username_available",
          email_address: "required|email",
          password: "required|confirmed",
          password_confirmation: "required|same:password",
          phone_number: "required|numeric|digits_between:10,12",
          pickup_time: "required|date",
          taxi: "required",
          pickup_place: "required",
          comments: "required|max:20",
          dropoff_place: "required",
          extras: "required|array"
        }
      );
    
      useEffect(() => {
        form.registerAsync("username_available", function (
          username,
          attribute,
          req,
          passes
        ) {
          setTimeout(() => {
            if (username === "foo")
              passes(false, "Username has already been taken.");
            // if username is not available
            else passes();
          }, 1000);
        });
      }, []);
    
      form.useLang(Lang.en);
    
      // let messages = form.getMessages(Lang.en);
      // console.log(messages);
    
      const onSubmit = async (event) => {
        const isValid = await form.validate(event);
        if (isValid) {
          console.log("MAKE AN API CALL", fields, errors);
        }
      };
    
      useEffect(() => {
        if (form.isValidForm) {
          console.log("MAKE AN API CALL ==> useEffect", fields, errors, form);
        }
      }, []);

  return (
    
    <div className='container mt-5 mb-5'>
        <h1>Bootstrap Form</h1>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      
      <Row className="mb-3">
      <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              required
            />
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            required
            type="text"
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>DOB</Form.Label>
          <Form.Control type="date" 
          required />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="text"
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} md="4">
          <Form.Label>Confirm Password</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              required
            />
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="4">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" 
          required />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" 
          required />
        </Form.Group>
        
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} md="4">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" 
          required />
        </Form.Group>
        
        <Form.Group as={Col} md="4">
          <Form.Label>Country Code</Form.Label>
          <Form.Control type="text" 
          required />
        </Form.Group>

        <Form.Group as={Col} md="4">
          <Form.Label>Pickup Place</Form.Label>
          <Form.Control type="text" 
          required />
        </Form.Group>

      </Row>
      <Button type="submit">Submit form</Button>
    </Form>

    </div>
  )
}
