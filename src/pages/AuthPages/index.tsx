import { ADMIN_DASHBOARD, USER_DASHBOARD } from "pages/pagesPath";
import React, { useState } from "react";
import { RouterProps } from "react-router";

const AuthPages = (props: RouterProps) => {
  const { history } = props;
  const [user] = useState("manager");

  if (user) {
    if (user === "user") {
      history.push(USER_DASHBOARD);
    } else if (user === "manager") {
      history.push(ADMIN_DASHBOARD);
    }

    return <div>I am auth page</div>;
  }

  if (!user) {
    return <div>unautorized</div>;
  }

  return <div>spinner....spinning</div>;
};

export default AuthPages;
