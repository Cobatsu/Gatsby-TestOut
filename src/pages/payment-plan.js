import * as React from "react";
import { useQueryParam, withQueryParams, StringParam } from "use-query-params";
import styled from "styled-components";
import Circle from "../components/common/circle";
import axios from "axios";
import styleds from "styled-components";

const ErrorCapsule = styleds.div`
 padding: 30px;
 box-shadow: 0 1px 6px -1px rgba(0, 0, 0, 0.4),
  0 2px 4px -1px rgba(0, 0, 0, 0.02);
 min-width: 200px;
 text-align: center;
 background: #e00543;
 color: white;
`;

const PaymentPlan = () => {
  var [token, setToken] = useQueryParam("token", StringParam);
  var [loading, setLoading] = React.useState(true);
  var [student, setStudent] = React.useState();
  var [response, setResponse] = React.useState(false);
  let paymentPlan_1 = [];
  let paymentPlan_2 = [];

  if (student) {
    paymentPlan_1 = [
      {
        amount: student.courseFee,
        date: formatDate(
          addDays(new Date(student.registerState.result.confirmedAt), 30)
        )
          .split("-")
          .reverse()
          .join("/"),
      },
    ];

    paymentPlan_2 = Array(3)
      .fill(null)
      .map((_, i) => ({
        amount: student?.courseFee / 3,
        date: formatDate(
          addDays(
            new Date(student.registerState.result.confirmedAt),
            30 * (i + 1)
          )
        )
          .split("-")
          .reverse()
          .join("/"),
      }));
  }

  const onSubmit = () => {
    var buttons = [
      document.querySelector(".type_1"),
      document.querySelector(".type_2"),
    ];
    var checkedBox = buttons.find((item) => item.checked);

    if (checkedBox) {
      if (checkedBox.className == "type_1")
        var selectedPaymentPlan = paymentPlan_1.map((item) => {
          return {
            amount: item.amount,
            date: formatDate(item.date, true),
          };
        });
      else
        var selectedPaymentPlan = paymentPlan_2.map((item) => {
          return {
            amount: item.amount,
            date: formatDate(item.date, true),
          };
        });

      setLoading(true);

      axios
        .post(
          "https://study-online.herokuapp.com/api/register/setPaymentPlan/",
          {
            token,
            selectedPaymentPlan,
          }
        )
        .then(({ data }) => {
          setLoading(false);
          setResponse(data.status);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onInputBoxChange = (e) => {
    var box_1 = document.querySelector(".type_1");
    var box_2 = document.querySelector(".type_2");

    if (e.target.className == "type_1") {
      if (e.target.checked) {
        box_2.checked = false;
      }
    } else if (e.target.className == "type_2") {
      if (e.target.checked) {
        box_1.checked = false;
      }
    }
  };

  React.useEffect(() => {
    axios
      .post(
        "https://study-online.herokuapp.com/api/register/external_url_student",
        {
          token,
        }
      )
      .then(({ data }) => {
        setStudent(data.student);
        setLoading(false);
      });
  }, []);

  function addDays(date, days) {
    const copy = new Date();
    copy.setDate(date.getDate() + days);
    return copy;
  }

  function formatDate(date, reverse) {
    if (reverse) return new Date(date.split("/").reverse().join("-"));
    else
      return date
        .toISOString()
        .replace(/T/, " ")
        .replace(/\..+/, "")
        .split(" ")[0];
  }

  return (
    <div>
      <div style={{ padding: 25 }}>
        <img src="/New Logo.png" style={{ width: "22rem" }} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          paddingBottom: 150,
        }}
      >
        {response === "Success" ? (
          <ErrorCapsule style={{ background: "#01937c" }}>
            {" "}
            Your payment decision has been submitted .{" "}
          </ErrorCapsule>
        ) : response === "Server Error" ? (
          <ErrorCapsule style={{ background: "#cc0000" }}>
            {" "}
            Server Error .{" "}
          </ErrorCapsule>
        ) : loading ? (
          <Circle
            Load={loading}
            width={25}
            height={25}
            top={10}
            position="static"
          />
        ) : (
          <div style={{ width: "40rem" }}>
            <div>
              <h1
                style={{
                  textAlign: "center",
                  color: "#191970",
                  marginBottom: 50,
                }}
              >
                Payment Plan
              </h1>
            </div>

            <div style={{ marginBottom: 40 }}>
              Please select one of the payment plans below which you find more
              appropriate. After selecting a payment plan, please submit your
              decision.
            </div>

            <div style={{ marginBottom: 50 }}>
              <span
                style={{
                  color: "#191970",
                  fontWeight: "bolder",
                  marginBottom: 10,
                  display: "inline-block",
                }}
              >
                {" "}
                Program:{" "}
              </span>
              {"  " +
                student?.StudentInfo.desired_university_studies
                  .split("_")
                  .join(" ")}
              <br />
              <br />
              <span style={{ color: "#191970", fontWeight: "bolder" }}>
                {" "}
                Level:{" "}
              </span>
              {student?.levelApplied}
            </div>

            <div style={{ marginBottom: 60 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 30,
                }}
              >
                <h3 style={{ color: "#191970", padding: 0 }}>Pay in full </h3>
                <input
                  onChange={onInputBoxChange}
                  className="type_1"
                  type="checkbox"
                  style={{ width: 20, height: 20, cursor: "pointer" }}
                  on
                />
              </div>

              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1.5px solid black",
                    paddingBottom: 15,
                    marginBottom: 20,
                  }}
                >
                  <span>Amount (GBP)</span>
                  <span>Due Date</span>
                </div>

                <ul>
                  {paymentPlan_1.map((item, i) => {
                    return (
                      <li
                        key={item.amount}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          paddingBottom: 15,
                        }}
                      >
                        <span style={{ color: "#191970" }}>
                          {" "}
                          {item.amount} £
                        </span>
                        <span>{item.date} </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div style={{ marginBottom: 40 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 30,
                }}
              >
                <h3 style={{ color: "#191970", padding: 0 }}>
                  {" "}
                  Pay by instalments{" "}
                </h3>
                <input
                  onChange={onInputBoxChange}
                  className="type_2"
                  type="checkbox"
                  style={{ width: 20, height: 20, cursor: "pointer" }}
                />
              </div>

              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1.5px solid black",
                    paddingBottom: 15,
                    marginBottom: 20,
                  }}
                >
                  <span>Amount (GBP)</span>
                  <span>Due Date</span>
                </div>

                <ul>
                  {paymentPlan_2.map((item, i) => {
                    return (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          paddingBottom: 15,
                        }}
                      >
                        <span style={{ color: "#191970" }}>
                          {" "}
                          {item.amount} £
                        </span>
                        <span>{item.date} </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                onClick={onSubmit}
                style={{
                  background: "#FBC933",
                  padding: "12px 25px",
                  borderRadius: 10,
                  border: "none",
                  fontSize: "1.1rem",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default withQueryParams({}, PaymentPlan);
