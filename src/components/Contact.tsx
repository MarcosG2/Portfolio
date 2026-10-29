import { useForm, ValidationError } from '@formspree/react'
import { SectionHeading } from './SectionHeading'
import { useLanguage } from '../i18n/useLanguage'
import { site } from '../data/site'

const contactEmail = (import.meta.env.VITE_CONTACT_EMAIL as string | undefined) ?? ''

const inputClass =
  'w-full border border-slate-700 text-slate-100 bg-slate-800/60 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 aria-invalid:border-red-500/80 aria-invalid:ring-red-500/40'

const fieldErrorClass = 'text-sm text-red-400 mt-1.5 block'

export const Contact = () => {
  const { t } = useLanguage()
  const [state, handleSubmit] = useForm(site.formspreeFormId)

  const mailto = contactEmail ? `mailto:${contactEmail}` : site.linkedin

  return (
    <section id="contacto" className="section-block relative z-10 min-h-[50vh] scroll-mt-28">
      <SectionHeading>{t.contact.title}</SectionHeading>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <h3 className="type-lead font-semibold text-slate-100 mb-4">{t.contact.heading}</h3>
          <p className="type-caption">{t.contact.body}</p>
        </div>

        {site.formspreeFormId ? (
          state.succeeded ? (
            <div
              className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-6"
              role="status"
            >
              <p className="text-emerald-300 font-medium">{t.contact.success}</p>
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
                  className={inputClass}
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
                  className={inputClass}
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
                  className={`${inputClass} resize-y min-h-[120px]`}
                />
                <ValidationError prefix="" field="message" errors={state.errors} className={fieldErrorClass} />
              </div>

              <ValidationError errors={state.errors} className={`${fieldErrorClass} mb-1`} />

              <button
                type="submit"
                disabled={state.submitting}
                className="mt-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-semibold rounded-md py-3 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 shadow-[0_4px_20px_-6px_rgba(37,99,235,0.5)]"
              >
                {state.submitting ? t.contact.sending : t.contact.send}
              </button>
            </form>
          )
        ) : (
          <div className="rounded-lg border border-slate-700 bg-slate-800/40 p-6">
            <p className="text-[#94b8e0] text-sm mb-4">{t.contact.mailtoFallback}</p>
            <a
              href={mailto}
              className="inline-flex text-blue-400 hover:text-blue-300 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 rounded-sm"
            >
              {contactEmail || 'LinkedIn'}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
