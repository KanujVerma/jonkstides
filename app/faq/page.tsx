import AnimateIn from '@/components/shared/AnimateIn'
import FaqAccordion from '@/components/faq/FaqAccordion'

const FAQ_ITEMS = [
  {
    _id: '1',
    question: 'What are research peptides?',
    answer:
      'Research peptides are short chains of amino acids studied in laboratory settings for their potential effects on biological processes. All compounds sold by JONKsTIDES LLC are supplied strictly for in-vitro research purposes only and are not intended for human or animal use, consumption, or therapeutic application of any kind.',
    order: 1,
  },
  {
    _id: '2',
    question: 'Are these products safe for human use?',
    answer:
      'No. All products sold on this site are for research use only. They have not been evaluated or approved by the FDA for human or veterinary use. Any form of ingestion, injection, inhalation, or bodily introduction into humans or animals is strictly prohibited. By purchasing, you confirm you are a qualified researcher using these compounds exclusively for in-vitro laboratory research.',
    order: 2,
  },
  {
    _id: '3',
    question: 'How should I store my peptides?',
    answer:
      'Lyophilized (freeze-dried) peptides should be stored in a cool, dry place away from direct light — ideally at -20°C for long-term storage. Once reconstituted, keep refrigerated at 2–8°C and use within 30 days. Avoid repeated freeze-thaw cycles as this can degrade peptide integrity.',
    order: 3,
  },
  {
    _id: '4',
    question: 'What solvent should I use for reconstitution?',
    answer:
      'Most peptides reconstitute well with bacteriostatic water (BAC water), which we also carry. Some peptides may require dilute acetic acid or sterile saline depending on their amino acid composition. Always use high-purity, research-grade solvents and follow established laboratory protocols.',
    order: 4,
  },
  {
    _id: '5',
    question: 'How do I know the quality and purity of your products?',
    answer:
      'All compounds are verified for labeled mass and purity at the time they leave our facility through internal quality control and independent third-party analytical testing. Certificates of Analysis (COAs) are available — reach out via our Discord or contact page if you need documentation for a specific batch.',
    order: 5,
  },
  {
    _id: '6',
    question: 'What does the lyophilized appearance mean?',
    answer:
      'Lyophilized material may appear cracked, fragmented, chipped, or loose within the vial. These are cosmetic variations only and do not affect chemical identity, purity, or stability. Lyophilized peptides are inherently fragile and visual differences commonly occur during transit — they have no bearing on compound quality.',
    order: 6,
  },
  {
    _id: '7',
    question: 'How long does shipping take?',
    answer:
      'Most orders ship within 1–2 business days. Standard domestic shipping typically arrives within 3–5 business days. You will receive a confirmation email with tracking once your order has shipped. We currently ship within the United States only.',
    order: 7,
  },
  {
    _id: '8',
    question: 'What is your return policy?',
    answer:
      'Due to the inability to verify post-delivery handling, storage conditions, and environmental variables, all sales are final. No returns or replacements are offered, as outlined in our Terms and Conditions agreed to at the time of purchase. If you have a concern about your order, please reach out to us directly.',
    order: 8,
  },
  {
    _id: '9',
    question: 'How do I place a bulk or wholesale order?',
    answer:
      'For bulk orders or wholesale inquiries, join our Discord community or reach out through the contact page. We work with researchers and labs on larger quantities and can discuss pricing and availability directly.',
    order: 9,
  },
  {
    _id: '10',
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit and debit cards processed securely at checkout. Orders are fulfilled promptly after payment confirmation.',
    order: 10,
  },
]

export default function FaqPage() {
  const items = FAQ_ITEMS

  return (
    <div className="min-h-screen bg-black px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <AnimateIn>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow">Help</p>
          <h1 className="mt-2 text-4xl font-black uppercase text-white">Frequently Asked Questions</h1>
        </AnimateIn>
        <FaqAccordion items={items} />
      </div>
    </div>
  )
}
