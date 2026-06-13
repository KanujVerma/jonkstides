'use client'

import { useState } from 'react'

interface QA {
  q: string
  a: string
  keywords: string[]
}

const QA_PAIRS: QA[] = [
  {
    q: 'What are peptides?',
    a: 'Peptides are short chains of amino acids used in research to study biological processes including cell signaling, tissue repair, and metabolic regulation.',
    keywords: ['what', 'peptide', 'are'],
  },
  {
    q: 'Are these safe?',
    a: 'All products are for research purposes only and not intended for human consumption. Safety profiles for personal use are outside the scope of what we can advise on.',
    keywords: ['safe', 'safety', 'dangerous'],
  },
  {
    q: 'What is your shipping policy?',
    a: 'Orders ship within 1\u20133 business days. Free shipping on orders over $75. We ship discreetly with no identifying markings.',
    keywords: ['ship', 'shipping', 'delivery', 'arrive'],
  },
  {
    q: 'Do you accept returns?',
    a: 'Due to the nature of research products, we do not accept returns. Please contact us if there is an issue with your order.',
    keywords: ['return', 'refund', 'cancel'],
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit and debit cards via Stripe, a secure payment processor.',
    keywords: ['payment', 'pay', 'card', 'credit'],
  },
  {
    q: 'How are products tested?',
    a: 'Every product batch comes with a third-party certificate of analysis (CoA) confirming purity and concentration. CoAs are available on each product page.',
    keywords: ['test', 'tested', 'coa', 'certificate', 'purity'],
  },
  {
    q: 'Do I need a prescription?',
    a: 'No prescription is required. Our products are sold for research purposes only and are not medications.',
    keywords: ['prescription', 'doctor', 'medical'],
  },
  {
    q: 'How do I contact you?',
    a: 'You can reach us at jonkstides@gmail.com. We typically respond within 24 hours.',
    keywords: ['contact', 'email', 'reach', 'support'],
  },
]

interface Message {
  from: 'user' | 'bot'
  text: string
}

function findAnswer(input: string): string {
  const lower = input.toLowerCase()
  const match = QA_PAIRS.find((qa) => qa.keywords.some((k) => lower.includes(k)))
  return match?.a ?? "I'm not sure about that. Please email us at jonkstides@gmail.com and we'll get back to you within 24 hours."
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { from: 'bot', text: 'Hey! How can I help you today?' },
  ])
  const [input, setInput] = useState('')

  function send() {
    if (!input.trim()) return
    const userMsg: Message = { from: 'user', text: input }
    const botMsg: Message = { from: 'bot', text: findAnswer(input) }
    setMessages((m) => [...m, userMsg, botMsg])
    setInput('')
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {open && (
        <div className="mb-3 flex h-96 w-80 flex-col overflow-hidden rounded-xl border border-white/10 bg-[#141414] shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <span className="text-xs font-bold uppercase tracking-widest text-yellow">Jonkstides Chat</span>
            <button onClick={() => setOpen(false)} className="text-muted hover:text-white">&times;</button>
          </div>
          <div className="flex-1 overflow-y-auto space-y-3 p-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-lg px-3 py-2 text-xs leading-relaxed ${
                    m.from === 'user'
                      ? 'bg-yellow text-black'
                      : 'bg-white/10 text-muted'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 p-3 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Ask a question\u2026"
              className="flex-1 rounded bg-white/10 px-3 py-2 text-xs text-white placeholder-muted outline-none focus:ring-1 focus:ring-yellow"
            />
            <button
              onClick={send}
              className="rounded bg-yellow px-3 py-2 text-xs font-bold text-black hover:opacity-90"
            >&#x2192;</button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow text-xl text-black shadow-lg hover:opacity-90 transition-opacity"
        aria-label="Open chat"
      >
        &#x1F4AC;
      </button>
    </div>
  )
}
