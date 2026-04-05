import React, { useEffect, useState } from 'react';
import SectionWrapper from './ui/SectionWrapper';
import {
  ShieldCheck,
  Copy,
  Phone,
  Mail,
  Building2,
  Hash,
  Shield,
} from 'lucide-react';

const upiId = 'moonlightalgorithm@airtel';
const upiApps = [
  {
    name: 'Google Pay',
    short: 'GPay',
    bg: 'from-[#0F9D58] via-[#DB4437] to-[#4285F4]',
    logo: 'https://cdn.simpleicons.org/googlepay/FFFFFF',
  },
  {
    name: 'PhonePe',
    short: 'PhonePe',
    bg: 'from-[#5F259F] to-[#8C5BD0]',
    logo: 'https://cdn.simpleicons.org/phonepe/FFFFFF',
  },
  {
    name: 'Paytm',
    short: 'Paytm',
    bg: 'from-[#00B9F1] to-[#0050A2]',
    logo: 'https://cdn.simpleicons.org/paytm/FFFFFF',
  },
  {
    name: 'Amazon Pay',
    short: 'Amazon',
    bg: 'from-[#FFB347] to-[#FF9900]',
    logo: '/amazonpay-logo.svg',
    text: 'text-black',
  },
];
const qrCodeUrl =
  'https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=upi://pay?pa=moonlightalgorithm@airtel&pn=Olevyn%20Technologies&cu=INR';

const PaymentGateway: React.FC = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timeout);
  }, [copied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(upiId);
      setCopied(true);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = upiId;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
    }
  };

  return (
    <SectionWrapper id="payment" className="py-16 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none" />
      <div className="relative space-y-12">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
            <ShieldCheck className="h-4 w-4 text-cyan-400" />
            SSL Encrypted Transaction
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/80 mb-3">
              Seamless Payments
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Make a Payment to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-300 to-blue-400">
                Olevyn Technologies
              </span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-neutral-300 max-w-2xl mx-auto">
              Secure payments for services and subscriptions. Choose the UPI link, scan
              the QR code, or complete a direct bank transfer below.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <div className="rounded-3xl border border-white/5 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-2xl p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)] flex h-full flex-col gap-8">
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.35em] text-neutral-400 mb-1">
                  UPI ID
                </p>
                <p className="text-lg font-semibold text-white break-all">{upiId}</p>
              </div>

              <button
                onClick={handleCopy}
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold tracking-widest uppercase text-white flex items-center justify-center gap-2 hover:bg-white/15 transition"
              >
                <Copy className="h-4 w-4 text-cyan-300" />
                {copied ? 'Copied!' : 'Copy UPI ID'}
              </button>

              <button className="w-full rounded-2xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 px-4 py-3 text-sm font-semibold uppercase tracking-widest text-black shadow-[0_15px_45px_rgba(16,185,129,0.35)] hover:scale-[1.01] transition">
                Pay Now
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-center text-xs uppercase tracking-[0.4em] text-neutral-400">
                Scan QR Code
              </p>
              <div className="flex justify-center">
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4 shadow-inner">
                  <img
                    src={qrCodeUrl}
                    alt="Olevyn Technologies payment QR"
                    className="h-48 w-48 rounded-xl border border-white/10 bg-white/5 p-2"
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="text-center text-xs uppercase tracking-[0.5em] text-neutral-500">
                Scan & Pay with any UPI app
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {upiApps.map((app) => (
                  <div
                    key={app.name}
                    className={`flex h-12 min-w-[130px] items-center gap-3 rounded-2xl border border-white/10 bg-gradient-to-r ${app.bg} px-4 text-xs font-semibold uppercase tracking-[0.35em] ${app.text ?? 'text-white'} shadow-[0_10px_30px_rgba(2,132,199,0.25)]`}
                  >
                    <img
                      src={app.logo}
                      alt={`${app.name} logo`}
                      loading="lazy"
                      className="h-6 w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
                    />
                    {app.short}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="h-full">
            <div className="rounded-3xl border border-white/5 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-2xl p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)] flex h-full flex-col gap-6">
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80 mb-3">
                    Contact Details
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                      <span className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-300">
                        <Phone className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">
                          Phone
                        </p>
                        <p className="text-white font-medium">+91 76799 53929</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                      <span className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-300">
                        <Mail className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">
                          Email
                        </p>
                        <p className="text-white font-medium">
                          hello@olevyntechnologies.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80 mb-3">
                    Bank Transfer
                  </p>
                  <div className="space-y-3">
                    {[
                      {
                        label: 'Account Name',
                        value: 'Olevyn Technologies',
                        icon: Building2,
                      },
                      {
                        label: 'Account Number',
                        value: '36028877870',
                        icon: Hash,
                      },
                      {
                        label: 'IFSC Code',
                        value: 'SBIN0015950',
                        icon: Shield,
                      },
                    ].map((entry) => (
                      <div
                        key={entry.label}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3"
                      >
                        <span className="rounded-2xl bg-emerald-500/10 p-3 text-emerald-300">
                          <entry.icon className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">
                            {entry.label}
                          </p>
                          <p className="text-white font-medium">{entry.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button className="w-full rounded-2xl border border-emerald-400/40 bg-emerald-500/10 px-4 py-3 text-sm font-semibold uppercase tracking-widest text-emerald-200 hover:bg-emerald-500/20 transition flex items-center justify-center gap-2 mt-auto">
                <ShieldCheck className="h-4 w-4" />
                Secure Payment Gateway
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PaymentGateway;
