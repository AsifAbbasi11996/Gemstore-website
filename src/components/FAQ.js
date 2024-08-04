import React from "react"
import "../assets/css/FAQ.css"

const FAQ = () => {
  return (
    <>
      <div className="faq_main-container">
        <div className="faq_container">
          <p>Need Help ?</p>
          <h1>Frequently asked questions</h1>
          <hr />
          <div className="faq_content">
            <details className="question">
              <summary>
                <span>Do you ship overseas?</span>
                <span>
                  <i class="ri-add-line"></i>
                </span>
              </summary>
              <div className="answer">
                <p>
                  Yes, we ship all over the world. Shipping costs will apply,
                  and will be added at checkout. We run discounts and promotions
                  all year, so stay tuned for exclusive deals.
                </p>
              </div>
            </details>
          </div>
          <hr />
          <div className="faq_content">
            <details className="question">
              <summary>
                <span>How long will it take to get my orders?</span>
                <span>
                  <i class="ri-add-line"></i>
                </span>
              </summary>
              <div className="answer">
                <p>
                  It depends on where you are. Orders processed here will take
                  5-7 business days to arrive. Overseas deliveries can take
                  anywhere from 7-16 days. Delivery details will be provided in
                  your confirmation email.
                </p>
              </div>
            </details>
          </div>
          <hr />
          <div className="faq_content">
            <details className="question">
              <summary>
                <span>Any question?</span>
                <span>
                  <i class="ri-add-line"></i>
                </span>
              </summary>
              <div className="answer">
                <p>
                  You can contact us through our contact page! We will be happy
                  to assist you.
                </p>
              </div>
            </details>
          </div>
          <hr />
        </div>
      </div>
    </>
  )
}

export default FAQ
