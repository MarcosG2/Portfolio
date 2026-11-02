import { useForm, ValidationError } from '@formspree/react'
import { SectionHeading } from './SectionHeading'
import { useLanguage } from '../i18n/useLanguage'
import { site } from '../data/site'

const contactEmail = (import.meta.env.VITE_CONTACT_EMAIL as string | undefined) ?? ''

const fieldErrorClass = 'text-sm text-red-400 mt-1.5 block'

export const Contact = () => {
  const { t } = useLanguage()
  const [state, handleSubmit] = useForm(site.formspreeFormId)

  const mailto = contactEmail ? `mailto:${contactEmail}` : site.linkedin

  return (
    <section id="contacto" className="section-block relative z-10 scroll-mt-28">
      <SectionHeading>{t.contact.title}</SectionHeading>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <h3 className="type-subsection mb-4">{t.contact.heading}</h3>
          <p className="type-caption">{t.contact.body}</p>
        </div>

        {site.formspreeFormId ? (
          state.succeeded ? (
            <div className="panel-success" role="status">
              <p>{t.contact.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              <input type="hidden" name="_subject" value="Portfolio — nuevo mensaje" />

              <div>
                <label htmlFor="contact-name" className="field-label">
                  {t.contact.name}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  disabled={state.submitting}
                  className="field-input"
                />
                <ValidationError prefix="" field="name" errors={state.errors} className={fieldErrorClass} />
              </div>

              <div>
                <label htmlFor="contact-email" className="field-label">
                  {t.contact.email}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  disabled={state.submitting}
                  className="field-input"
                />
                <ValidationError prefix="" field="email" errors={state.errors} className={fieldErrorClass} />
              </div>

              <div>
                <label htmlFor="contact-message" className="field-label">
                  {t.contact.message}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  disabled={state.submitting}
                  className="field-input resize-y min-h-[120px]"
                />
                <ValidationError prefix="" field="message" errors={state.errors} className={fieldErrorClass} />
              </div>

              <ValidationError errors={state.errors} className={`${fieldErrorClass} mb-1`} />

              <button type="submit" disabled={state.submitting} className="btn-primary focus-ring mt-2">
                {state.submitting ? t.contact.sending : t.contact.send}
              </button>
            </form>
          )
        ) : (
          <div className="panel-muted">
            <p className="type-caption mb-4">{t.contact.mailtoFallback}</p>
            <a href={mailto} className="touch-link text-sm font-semibold text-[var(--color-signal)] interactive-accent focus-ring rounded-sm">
              {contactEmail || 'LinkedIn'}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
