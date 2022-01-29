import React from "react";
import "./form.css";
import { Form, Button } from "react-bootstrap";
function Formulaire() {
  return (
    <div className="all">
      <div className="image">
        <h1>facebook</h1>
        <h2>Welcome back, Mayssa!</h2>
        <img
          src="https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/241422898_363557128780754_3816253899194522415_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QUS0Ch3GEC0AX_78lGd&tn=m4Lkz93Gmxv1XLVX&_nc_ht=scontent.ftun14-1.fna&oh=00_AT_5SwkIZd-Tz-p8U_Khe-hTldA2YipEuE0vY7DarMsjDQ&oe=61F8AE6B"
          alt="photo of me"
        />
        <p className="myname">Mayssa Mtar</p>
        <button>Continue to Facebook</button>
      </div>
      <div className="container">
        <div className="form">
          <p className="this">This not you ? </p>
          <Form className="formStyle">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Your email adress" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Your password" />
            </Form.Group>
            <div className="button">
              <Button className="connecter" variant="primary">
                Login
              </Button>
              <Button className="compte" variant="success">
                Create your profil
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Formulaire;
