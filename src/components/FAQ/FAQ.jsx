import { useState } from 'react'
import Reveal from '../common/Reveal.jsx'
import { FAQS } from '../../data/faq.js'
import './FAQ.css'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-heading">
          <Reveal className="eyebrow">Questions</Reveal>
          <Reveal delay={1} as="h2" className="section-title">Frequently asked questions</Reveal>
          <Reveal delay={2} as="p" className="section-subtitle">
            Everything you need to know before getting started. Don't see your question? Reach out below.
          </Reveal>
        </div>

        <div className="faq-list">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <Reveal key={faq.question} delay={(index % 3) + 1} className="faq-item">
                <button
                  className="faq-item__question"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-header-${index}`}
                >
                  <span>{faq.question}</span>
                  <span className={`faq-item__icon ${isOpen ? 'is-open' : ''}`} aria-hidden="true">+</span>
                </button>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-header-${index}`}
                  className={`faq-item__answer ${isOpen ? 'is-open' : ''}`}
                >
                  <p>{faq.answer}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
