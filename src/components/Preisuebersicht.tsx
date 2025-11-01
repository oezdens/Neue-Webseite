import { Check, Star, ArrowRight } from "lucide-react";

export default function Preisuebersicht() {
  const pricingPackages = [
    {
      name: "Standard Webseite",
      price: "299€",
      originalPrice: "598€",
      description: "Perfekt für kleine Unternehmen und Start-ups",
      features: [
        "Bis zu 6 Seiten",
        "Responsive Design",
        "Kontaktformular",
        "SEO-Optimierung",
        "1 Monat Support",
        "Social Media Integration"
      ],
      highlighted: true
    },
    {
      name: "Business Webseite",
      price: "499€",
      originalPrice: "998€",
      description: "Für wachsende Unternehmen mit erweiterten Anforderungen",
      features: [
        "Bis zu 15 Seiten",
        "Premium Design",
        "CMS Integration",
        "Erweiterte SEO",
        "6 Monate Support",
        "Analytics Dashboard",
        "Newsletter Integration"
      ],
      highlighted: false
    }
  ];

  return (
    <>
      <style>{`
        @keyframes pricing-gradient-xy {
          0%, 100% { 
            background-position: 0% 50%; 
            transform: scale(1);
          }
          50% { 
            background-position: 100% 50%; 
            transform: scale(1.05);
          }
        }
        
        @keyframes pricing-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes pricing-pulse-delay-2s {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes pricing-pulse-delay-4s {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .pricing-pulse {
          animation: pricing-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .pricing-pulse-delay-2s {
          animation: pricing-pulse-delay-2s 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          animation-delay: 2s;
        }
        
        .pricing-pulse-delay-4s {
          animation: pricing-pulse-delay-4s 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          animation-delay: 4s;
        }
      `}</style>

      <div id="preise" style={{
        minHeight: '100vh',
        backgroundColor: '#020617',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none'
        }}>
          <div className="pricing-pulse" style={{
            position: 'absolute',
            top: '5rem',
            left: '-5rem',
            width: '24rem',
            height: '24rem',
            backgroundColor: 'rgba(168, 85, 247, 0.2)',
            borderRadius: '9999px',
            filter: 'blur(96px)'
          }} />
          <div className="pricing-pulse-delay-2s" style={{
            position: 'absolute',
            top: '10rem',
            right: '5rem',
            width: '20rem',
            height: '20rem',
            backgroundColor: 'rgba(236, 72, 153, 0.2)',
            borderRadius: '9999px',
            filter: 'blur(96px)'
          }} />
          <div className="pricing-pulse-delay-4s" style={{
            position: 'absolute',
            bottom: '10rem',
            left: '33.333333%',
            width: '24rem',
            height: '24rem',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderRadius: '9999px',
            filter: 'blur(96px)'
          }} />
        </div>

        <div style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '5rem 1.5rem'
        }}>
          {/* Pricing Section */}
          <div>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                borderRadius: '9999px',
                background: 'linear-gradient(to right, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                backdropFilter: 'blur(8px)',
                marginBottom: '1.5rem'
              }}>
                <Star style={{ width: '1rem', height: '1rem', color: '#facc15' }} />
                <span style={{ color: '#d8b4fe', fontSize: '0.875rem' }}>Preisübersicht</span>
              </div>
              
              <h2 style={{
                fontSize: 'clamp(2.25rem, 5vw, 3rem)',
                color: 'white',
                marginBottom: '1rem'
              }}>
                Transparente <span style={{
                  background: 'linear-gradient(to right, #c084fc, #f0abfc)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Preise</span>
              </h2>
              <p style={{
                fontSize: '1.25rem',
                color: '#94a3b8',
                maxWidth: '42rem',
                margin: '0 auto'
              }}>
                Faire Preise. Keine versteckten Kosten.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              maxWidth: '64rem',
              margin: '0 auto'
            }}>
              {pricingPackages.map((pkg, index) => (
                <div 
                  key={index}
                  style={{
                    position: 'relative',
                    background: 'linear-gradient(to bottom right, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.8))',
                    backdropFilter: 'blur(16px)',
                    border: pkg.highlighted 
                      ? '1px solid rgba(168, 85, 247, 0.5)' 
                      : '1px solid rgba(51, 65, 85, 0.5)',
                    borderRadius: '1.5rem',
                    padding: '1.5rem',
                    transition: 'all 0.5s',
                    boxShadow: pkg.highlighted 
                      ? '0 25px 50px -12px rgba(168, 85, 247, 0.2)' 
                      : 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-0.5rem)';
                    if (!pkg.highlighted) {
                      e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.5)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    if (!pkg.highlighted) {
                      e.currentTarget.style.borderColor = 'rgba(51, 65, 85, 0.5)';
                    }
                  }}
                >
                  {pkg.highlighted && (
                    <div style={{
                      position: 'absolute',
                      top: '-1rem',
                      left: '50%',
                      transform: 'translateX(-50%)'
                    }}>
                      <div style={{
                        padding: '0.5rem 1rem',
                        borderRadius: '9999px',
                        background: 'linear-gradient(to right, #9333ea, #ec4899)',
                        color: 'white',
                        fontSize: '0.875rem'
                      }}>
                        Beliebt
                      </div>
                    </div>
                  )}

                  <div style={{ position: 'relative' }}>
                    {/* Header */}
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h3 style={{
                        fontSize: '1.5rem',
                        color: 'white',
                        marginBottom: '0.5rem'
                      }}>
                        {pkg.name}
                      </h3>
                      <p style={{
                        color: '#94a3b8',
                        fontSize: '0.875rem',
                        marginBottom: '1rem'
                      }}>
                        {pkg.description}
                      </p>
                      <div style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '0.75rem'
                      }}>
                        <span style={{
                          fontSize: '2.25rem',
                          background: 'linear-gradient(to right, #c084fc, #f0abfc)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}>
                          {pkg.price}
                        </span>
                        <span style={{
                          color: '#64748b',
                          textDecoration: 'line-through',
                          fontSize: '1.125rem'
                        }}>
                          {pkg.originalPrice}
                        </span>
                      </div>
                      <p style={{
                        fontSize: '0.875rem',
                        color: '#c084fc',
                        marginTop: '0.25rem'
                      }}>
                        Festpreis - keine versteckten Kosten
                      </p>
                    </div>

                    {/* Features */}
                    <div style={{ marginBottom: '1.5rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {pkg.features.map((feature, featureIndex) => (
                          <div key={featureIndex} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                          }}>
                            <div style={{
                              flexShrink: 0,
                              width: '1.25rem',
                              height: '1.25rem',
                              borderRadius: '9999px',
                              backgroundColor: 'rgba(168, 85, 247, 0.2)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              <Check style={{
                                width: '0.75rem',
                                height: '0.75rem',
                                color: '#c084fc',
                                strokeWidth: 3
                              }} />
                            </div>
                            <span style={{
                              color: '#cbd5e1',
                              fontSize: '0.875rem'
                            }}>
                              {feature}
                            </span>
                          </div>
                        ))}
                        
                        {/* Legal Features */}
                        <div style={{
                          paddingTop: '0.75rem',
                          borderTop: '1px solid rgba(51, 65, 85, 0.5)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.75rem'
                        }}>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                          }}>
                            <div style={{
                              flexShrink: 0,
                              width: '1.25rem',
                              height: '1.25rem',
                              borderRadius: '9999px',
                              backgroundColor: 'rgba(34, 197, 94, 0.2)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              <Check style={{
                                width: '0.75rem',
                                height: '0.75rem',
                                color: '#4ade80',
                                strokeWidth: 3
                              }} />
                            </div>
                            <span style={{
                              color: '#cbd5e1',
                              fontSize: '0.875rem'
                            }}>
                              Impressum (kostenlos)
                            </span>
                          </div>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                          }}>
                            <div style={{
                              flexShrink: 0,
                              width: '1.25rem',
                              height: '1.25rem',
                              borderRadius: '9999px',
                              backgroundColor: 'rgba(34, 197, 94, 0.2)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              <Check style={{
                                width: '0.75rem',
                                height: '0.75rem',
                                color: '#4ade80',
                                strokeWidth: 3
                              }} />
                            </div>
                            <span style={{
                              color: '#cbd5e1',
                              fontSize: '0.875rem'
                            }}>
                              Datenschutz (kostenlos)
                            </span>
                          </div>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                          }}>
                            <div style={{
                              flexShrink: 0,
                              width: '1.25rem',
                              height: '1.25rem',
                              borderRadius: '9999px',
                              backgroundColor: 'rgba(34, 197, 94, 0.2)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              <Check style={{
                                width: '0.75rem',
                                height: '0.75rem',
                                color: '#4ade80',
                                strokeWidth: 3
                              }} />
                            </div>
                            <span style={{
                              color: '#cbd5e1',
                              fontSize: '0.875rem'
                            }}>
                              Barrierefreiheit (kostenlos)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => {
                        const element = document.getElementById("kontakt");
                        if (element) {
                          const headerEl = document.querySelector('header') as HTMLElement | null;
                          const headerHeight = headerEl ? headerEl.offsetHeight : 120;
                          const top = element.getBoundingClientRect().top + window.scrollY;
                          const desired = Math.max(0, top - headerHeight - 16);
                          window.scrollTo({ top: desired, behavior: 'smooth' });
                          return;
                        }
                        window.location.href = '/#kontakt';
                      }}
                      onMouseEnter={(e) => {
                        if (pkg.highlighted) return;
                        const btn = e.currentTarget as HTMLButtonElement;
                        btn.style.borderColor = 'rgba(168,85,247,0.9)';
                        const span = btn.querySelector('span');
                        if (span) (span as HTMLElement).style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        if (pkg.highlighted) return;
                        const btn = e.currentTarget as HTMLButtonElement;
                        btn.style.borderColor = '#334155';
                        const span = btn.querySelector('span');
                        if (span) (span as HTMLElement).style.color = '#cbd5e1';
                      }}
                      style={{
                        width: '100%',
                        position: 'relative',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '9999px',
                        overflow: 'hidden',
                        border: pkg.highlighted ? 'none' : '2px solid #334155',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {pkg.highlighted ? (
                        <>
                          <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to right, #9333ea, #ec4899, #9333ea)',
                            backgroundSize: '200% 100%',
                            animation: 'pricing-gradient-xy 3s ease infinite'
                          }} />
                          <span style={{
                            position: 'relative',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem'
                          }}>
                            Jetzt starten
                            <ArrowRight style={{
                              width: '1.25rem',
                              height: '1.25rem',
                              transition: 'transform 0.3s'
                            }} />
                          </span>
                        </>
                      ) : (
                        <span style={{
                          color: '#cbd5e1',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.5rem',
                          transition: 'color 0.3s'
                        }}>
                          Jetzt starten
                          <ArrowRight style={{
                            width: '1.25rem',
                            height: '1.25rem',
                            transition: 'transform 0.3s'
                          }} />
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

