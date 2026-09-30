"use client";
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, CheckCircle, Target, TrendingUp, BarChart, Zap, Send } from 'lucide-react'

const steps = [
  { id: 1, title: 'Your Goals' },
  { id: 2, title: 'Company Details' },
  { id: 3, title: 'Contact Info' }
];

const serviceOptions = [
  { id: 'lead-gen', label: 'Lead Generation', icon: Target, desc: 'B2B Outbound & Paid Ads' },
  { id: 'content', label: 'Content Authority', icon: TrendingUp, desc: 'LinkedIn & Thought Leadership' },
  { id: 'seo', label: 'SEO & Organic', icon: BarChart, desc: 'Search Dominance & Traffic' },
  { id: 'full-system', label: 'Full Revenue System', icon: Zap, desc: 'End-to-End Marketing Engine' },
];

const revenueOptions = [
  'Pre-revenue',
  '$10k - $50k / month',
  '$50k - $200k / month',
  '$200k+ / month'
];

export default function InteractiveDiscoveryForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState('idle');
  
  const [formData, setFormData] = useState({
    services: [],
    companyName: '',
    revenue: '',
    name: '',
    email: '',
    phone: '',
    botcheck: false
  });

  const toggleService = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const nextStep = () => {
    if (step === 1 && formData.services.length === 0) return alert('Please select at least one goal.');
    if (step === 2 && (!formData.companyName || !formData.revenue)) return alert('Please fill in your company details.');
    setStep(s => Math.min(s + 1, 3));
  };

  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return alert('Please fill in your contact details.');

    if (formData.botcheck) {
      setStatus('success');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '88c85314-1851-4448-a4b2-bf517e0bb82a',
          subject: 'New Discovery Form Lead',
          from_name: 'ELNR Media',
          ...formData
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
      } else {
        setStatus('error');
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      alert('Network error. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-16 px-8 text-center bg-navy-900/80 backdrop-blur-md border border-white/10 rounded-[32px] shadow-xl w-full"
      >
        <CheckCircle size={64} className="text-brand-400 mx-auto mb-6" />
        <h3 className="font-display text-3xl font-bold text-white mb-4">Discovery Request Received</h3>
        <p className="text-white/60 text-lg leading-relaxed max-w-md mx-auto">
          Thank you, {formData.name}. Our strategic team will review your details and reach out within 24 hours to schedule your strategy call.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-navy-900/80 backdrop-blur-md border border-white/10 rounded-[32px] p-6 lg:p-10 shadow-xl relative z-10 w-full">
      {/* Progress Indicator */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-4">
          {steps.map((s, idx) => (
            <div key={s.id} className="flex flex-col items-center flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors duration-300 ${
                step > s.id ? 'bg-brand-500 border-brand-500 text-white' :
                step === s.id ? 'border-brand-400 text-brand-400 bg-brand-500/10' :
                'border-white/10 text-white/40 bg-white/5'
              }`}>
                {step > s.id ? <CheckCircle size={16} /> : s.id}
              </div>
              <div className={`text-[10px] uppercase tracking-wider font-bold mt-2 ${
                step >= s.id ? 'text-white' : 'text-white/40'
              }`}>
                {s.title}
              </div>
            </div>
          ))}
        </div>
        <div className="h-1 bg-white/10 rounded-full overflow-hidden w-[85%] mx-auto">
          <motion.div 
            className="h-full bg-brand-500 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${((step - 1) / 2) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* Step 1 */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="mb-8">
              <h3 className="font-display text-2xl font-bold text-white mb-2">What are your primary growth goals?</h3>
              <p className="text-white/60">Select all that apply to help us tailor your strategy.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {serviceOptions.map(opt => {
                const isSelected = formData.services.includes(opt.id);
                const Icon = opt.icon;
                return (
                  <div 
                    key={opt.id}
                    onClick={() => toggleService(opt.id)}
                    className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                      isSelected 
                        ? 'bg-brand-500/20 border-brand-400/50 text-white shadow-[0_0_20px_rgba(236,72,153,0.15)]' 
                        : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className={`p-2 rounded-xl flex-shrink-0 ${isSelected ? 'bg-brand-500 text-white' : 'bg-white/10 text-white/60'}`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white mb-1">{opt.label}</div>
                      <div className="text-xs text-white/50">{opt.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button onClick={nextStep} className="w-full btn-primary btn-pill flex items-center justify-center gap-2 py-4 mt-8">
              Continue to Details <ArrowRight size={18} />
            </button>
          </motion.div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="mb-8">
              <h3 className="font-display text-2xl font-bold text-white mb-2">Tell us about your company</h3>
              <p className="text-white/60">This helps us understand your current scale and capacity.</p>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-white/60 uppercase tracking-[0.2em] mb-3 ml-2">Company Name</label>
              <input
                type="text"
                placeholder="Acme Corp"
                value={formData.companyName}
                onChange={e => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                className="w-full px-6 py-4 rounded-full bg-white/[0.06] border border-white/[0.1] text-white placeholder-white/20 text-base font-medium focus:outline-none focus:border-brand-400/50 focus:bg-white/[0.09] transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-white/60 uppercase tracking-[0.2em] mb-3 ml-2">Current Monthly Revenue</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {revenueOptions.map(rev => (
                  <div
                    key={rev}
                    onClick={() => setFormData(prev => ({ ...prev, revenue: rev }))}
                    className={`cursor-pointer px-4 py-3 text-center rounded-xl border transition-all text-sm font-semibold ${
                      formData.revenue === rev
                        ? 'bg-brand-500 text-white border-brand-500'
                        : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {rev}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button onClick={prevStep} className="px-6 py-4 rounded-full border border-white/20 text-white/60 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-center">
                <ArrowLeft size={18} />
              </button>
              <button onClick={nextStep} className="flex-1 btn-primary btn-pill flex items-center justify-center gap-2 py-4">
                Final Step <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="mb-8">
              <h3 className="font-display text-2xl font-bold text-white mb-2">Where should we send the details?</h3>
              <p className="text-white/60">Your personal contact information.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="checkbox" className="hidden" style={{ display: 'none' }} checked={formData.botcheck} onChange={e => setFormData(prev => ({ ...prev, botcheck: e.target.checked }))} />

              <div>
                <label className="block text-[11px] font-bold text-white/60 uppercase tracking-[0.2em] mb-2 ml-2">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-6 py-4 rounded-full bg-white/[0.06] border border-white/[0.1] text-white placeholder-white/20 focus:outline-none focus:border-brand-400/50 focus:bg-white/[0.09] transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-white/60 uppercase tracking-[0.2em] mb-2 ml-2">Work Email</label>
                <input
                  type="email"
                  required
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-6 py-4 rounded-full bg-white/[0.06] border border-white/[0.1] text-white placeholder-white/20 focus:outline-none focus:border-brand-400/50 focus:bg-white/[0.09] transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-white/60 uppercase tracking-[0.2em] mb-2 ml-2">Phone (Optional)</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-6 py-4 rounded-full bg-white/[0.06] border border-white/[0.1] text-white placeholder-white/20 focus:outline-none focus:border-brand-400/50 focus:bg-white/[0.09] transition-all"
                />
              </div>

              <div className="flex gap-4 mt-8 pt-4">
                <button type="button" onClick={prevStep} className="px-6 py-4 rounded-full border border-white/20 text-white/60 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-center">
                  <ArrowLeft size={18} />
                </button>
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className={`flex-1 btn-primary btn-pill flex items-center justify-center gap-2 py-4 ${status === 'submitting' ? 'opacity-70 cursor-wait' : ''}`}
                >
                  {status === 'submitting' ? 'Submitting...' : 'Complete Request'} 
                  {status !== 'submitting' && <Send size={18} />}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
