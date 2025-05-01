import React, { useState, useMemo, useEffect } from 'react';
import { Form, Input, Select, Row, Col, message,Spin } from 'antd'; 
import axios from 'axios';
import './Contactus.css';
import countryList from 'react-select-country-list';
import { Helmet } from 'react-helmet-async';

const { TextArea } = Input;
const { Option } = Select;

const usaStates = [
  { code: 'AL', name: 'Alabama' },
  { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' },
  { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' },
  { code: 'DE', name: 'Delaware' },
  { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' },
  { code: 'HI', name: 'Hawaii' },
  { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' },
  { code: 'IN', name: 'Indiana' },
  { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' },
  { code: 'KY', name: 'Kentucky' },
  { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' },
  { code: 'MD', name: 'Maryland' },
  { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' },
  { code: 'MN', name: 'Minnesota' },
  { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' },
  { code: 'MT', name: 'Montana' },
  { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' },
  { code: 'NH', name: 'New Hampshire' },
  { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' },
  { code: 'NY', name: 'New York' },
  { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' },
  { code: 'OH', name: 'Ohio' },
  { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' },
  { code: 'PA', name: 'Pennsylvania' },
  { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' },
  { code: 'SD', name: 'South Dakota' },
  { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' },
  { code: 'UT', name: 'Utah' },
  { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' },
  { code: 'WA', name: 'Washington' },
  { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' },
  { code: 'WY', name: 'Wyoming' },
];


const ContactUs = () => {

  const [form] = Form.useForm();
  const [selectedCountry, setSelectedCountry] = useState('US');
  const [showStates, setShowStates] = useState(true);
  const [isContactPage, setIsContactPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 
  const [isError, setIsError] = useState(true); 
    const blockedProviders  = [
      'gmail.com',
      'yahoo.com',
      'outlook.com',
      'hotmail.com',
      'protonmail.com',
      'zoho.com',
      'aol.com',
      'gmx.com',
      'mail.com',
      'icloud.com',
      'yandex.com'
    ];
    
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    borderRadius: 8
  };


  const countries = useMemo(() => {
    return countryList().getData().map(country => ({
    value: country.value,
    label: country.label
    }));
    }, []);
    const onFinish = (values) => {
      if(isError){
      setIsLoading(true);
      axios.post(`https://api.dental.e-consystems.com/api/contactusform`, { values })
        .then(result => {
          message.success('Message sent successfully!');
          form.resetFields();
        })
        .catch(err => {
          console.error(err);
          message.error('Failed to send message. Please try again.');
        })
        .finally(() => setIsLoading(false)); 
    }
  };
  const handleCountryChange = (value) => {
    
    const country = countries.find(c => c.value === value);
    setSelectedCountry(value);
    setShowStates(country?.value === 'US');
    if (country?.value !== 'US') {
      form.setFieldsValue({ state: undefined });
    }
  };

  const emailValidator = (_, value) => {
    if (value) {
      const domain = value.split('@')[1]?.toLowerCase();
      if (domain && blockedProviders.includes(domain)) {
        setIsError(false);
        return Promise.reject('Please enter your company email');
      }
    
    }
    return Promise.resolve();
  };
  
  const handleEmailValidate = async (e) => {
    const email = e.target.value;
    if (email) {
      const domain = email.split('@')[1]?.toLowerCase();
      if (domain && blockedProviders.includes(domain)) {
        setIsError(false);
        form.setFields([
          {
            name: 'email',
            errors: ["Please enter your company email"],
          },
        ]);
        return;
      }
      axios.post(`https://api.dental.e-consystems.com/api/validateEmail`, { email })
        .then(result => {
          if(result.data.isValid === true){
            setIsError(true);
            return true;
          }
          else if(result.data.isValid === false){
            setIsError(false);
            form.setFields([
              {
                name: 'email',
                errors: ["Please enter valid email ID"],
              },
            ]);
          }
          else if (result.data.isValid === null || result.data.isValid === undefined) {
          if (result.data.status === 'valid' || result.data.status === 'catch-all' || result.data.status === 'role_based') {
            if (!result.data.free_email) {
              setIsError(true);
              return true
            }
            else {
              setIsError(false);
              form.setFields([
                {
                  name: 'email',
                  errors: ["Please enter valid email ID"],
                },
              ]);
            }
          }
          else {
            setIsError(false);
            form.setFields([
              {
                name: 'email',
                errors: ["Please enter valid email ID"],
              },
            ]);
          }
        }
        })
        .catch(err => console.log(err));

    }
  };

  useEffect(() => {
    let url = window.location.pathname.replace('/', '');
    if (url === "mobility/contact-us") {
      setIsContactPage(true);
    }
  }, []);
  return (
    <div className='total-contact'>
      {isContactPage && <Helmet>
        <title>Contact Us | Connect with e-con Mobility Experts</title>
        <meta name='description' content='Reach out to e-con Mobility for inquiries on automotive-grade camera solutions. Our team is here to assist with product info, support, and partnerships.' />
      </Helmet>}
      <h1 className='Contact-us'>CONTACT US</h1>

      <span className='Spam-questions'>Do You Have Any Questions?</span>

      <div className="Contact-ted">
        <div className="mainContainer" style={{ position: 'relative' }}>
        {isLoading && (
    <div style={overlayStyle}>
      <Spin size="large" />
    </div>
  )}
          <Form
            form={form}
            name="contactForm"
            onFinish={onFinish}
            layout="vertical"
            initialValues={{
              country: 'US',
              state: 'AL',
            }}
          >
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  rules={[{ required: true, message: 'Please enter your name' }]}
                >
                  <Input placeholder="Name*" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="companyName"
                  rules={[{ required: true, message: 'Please enter your company name' }]}
                >
                  <Input placeholder="Company Name*" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={8}>
              <Col span={12}>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: 'Please enter your email' },
                    { type: 'email', message: 'Please enter a valid email' },
                    { validator: emailValidator }
                  ]}
                >
                  <Input placeholder="name@yourcompany.com*" autoComplete='off' onPaste={(e) => {
                    e.preventDefault()
                    return false;
                  }} 
                  onBlur={handleEmailValidate}
                   />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="contactNumber"
                  rules={[{ message: 'Please enter your phone number' }]}
                >
                  <Input
                    className='contact-num-box'
                    placeholder="Contact Number"
                  //addonBefore={selectedCountry ? countries.find(c => c.name === selectedCountry)?.code : ''} 
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={8}>
              <Col span={12}>
                <Form.Item
                  name="country"
                  rules={[{ required: true, message: 'Please select your country' }]}
                >
                  <Select
                   showSearch
                   placeholder="Select country"
                   onChange={handleCountryChange}
                  >
                   {countries.map(country => (
<Option key={country.value} value={country.value}>
{country.label}
</Option>
))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                {showStates && (
                  <Form.Item
                    name="state"
                    rules={[{ required: showStates, message: 'Please select your state' }]}
                  >
                    <Select placeholder="Select state">
                      {usaStates.map((state) => (
                        <Option key={state.code} value={state.code}>
                          {state.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                )}
              </Col>
            </Row>

            <Row gutter={8}>
              <Col span={24}>
                <Form.Item
                  name="queries"
                  rules={[{ message: 'Please describe your queries' }]}
                >
                  <TextArea placeholder="Describe Your Queries" rows={5} />
                </Form.Item>
              </Col>
            </Row>

            <Row justify="center">
              <Col>
                <Form.Item>
                           <button 
                 type="submit"
                 className="submitContacts-btn"
               >
                 Submit
               </button>
                           </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
