/* @ds-bundle: {"format":4,"namespace":"FortisAnimaDesignSystem_3f4225","components":[{"name":"ContactForm","sourcePath":"components/content/ContactForm.jsx"},{"name":"FAQ","sourcePath":"components/content/FAQ.jsx"},{"name":"FeatureGrid","sourcePath":"components/content/FeatureGrid.jsx"},{"name":"IconCard","sourcePath":"components/content/IconCard.jsx"},{"name":"ServiceCard","sourcePath":"components/content/ServiceCard.jsx"},{"name":"StatisticCard","sourcePath":"components/content/StatisticCard.jsx"},{"name":"TeamCard","sourcePath":"components/content/TeamCard.jsx"},{"name":"Timeline","sourcePath":"components/content/Timeline.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"SectionHeader","sourcePath":"components/core/SectionHeader.jsx"},{"name":"CTA","sourcePath":"components/marketing/CTA.jsx"},{"name":"Footer","sourcePath":"components/marketing/Footer.jsx"},{"name":"Hero","sourcePath":"components/marketing/Hero.jsx"},{"name":"Navigation","sourcePath":"components/marketing/Navigation.jsx"}],"sourceHashes":{"components/content/ContactForm.jsx":"98523f261289","components/content/FAQ.jsx":"86482c19b700","components/content/FeatureGrid.jsx":"2c2b4bbce391","components/content/IconCard.jsx":"c900a2f81651","components/content/ServiceCard.jsx":"63139c17003e","components/content/StatisticCard.jsx":"1260ec160d85","components/content/TeamCard.jsx":"b6192e6dfe99","components/content/Timeline.jsx":"c8fd038f5f32","components/core/Button.jsx":"bb5dfe37e7df","components/core/Card.jsx":"963a4a538de1","components/core/Icon.jsx":"cc010e11750d","components/core/Input.jsx":"2292fa78b08a","components/core/SectionHeader.jsx":"bbec87c3a1fd","components/marketing/CTA.jsx":"370c45061a45","components/marketing/Footer.jsx":"58a441d68893","components/marketing/Hero.jsx":"83e40b38dee8","components/marketing/Navigation.jsx":"13c0076f7255","ui_kits/website/AboutScreen.jsx":"53d68da501f1","ui_kits/website/ContactScreen.jsx":"ddc5a3ff24a7","ui_kits/website/HomeScreen.jsx":"c222bf6e60fd","ui_kits/website/ServicesScreen.jsx":"f11824321c9f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FortisAnimaDesignSystem_3f4225 = window.FortisAnimaDesignSystem_3f4225 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/StatisticCard.jsx
try { (() => {
function StatisticCard({
  value,
  label,
  description,
  onDark = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }, style)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '64px',
      fontWeight: 500,
      lineHeight: 1,
      letterSpacing: 'var(--tracking-display)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--fa-forest)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-overline)',
      letterSpacing: 'var(--tracking-overline)',
      textTransform: 'uppercase',
      color: 'var(--fa-gold)',
      marginTop: 'var(--space-2)'
    }
  }, label), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--text-body-sm)',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, description) : null);
}
Object.assign(__ds_scope, { StatisticCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatisticCard.jsx", error: String((e && e.message) || e) }); }

// components/content/TeamCard.jsx
try { (() => {
/* Photo should be authentic, natural daylight. If no `photo` URL is given,
   a quiet placeholder block is rendered. */
function TeamCard({
  name,
  role,
  photo,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }, style)
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: name,
    style: {
      width: '100%',
      aspectRatio: '4 / 5',
      objectFit: 'cover',
      borderRadius: 'var(--radius-image)',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '4 / 5',
      borderRadius: 'var(--radius-image)',
      background: 'var(--surface-tint)',
      border: '1px solid var(--border-soft)',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 'var(--space-4)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, "Portrait placeholder")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '24px',
      fontWeight: 500,
      color: 'var(--text-body)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, role)));
}
Object.assign(__ds_scope, { TeamCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TeamCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Timeline.jsx
try { (() => {
function Timeline({
  steps = [],
  style
}) {
  return /*#__PURE__*/React.createElement("ol", {
    style: Object.assign({
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column'
    }, style)
  }, steps.map((step, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '72px 1fr',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '28px',
      fontWeight: 500,
      color: 'var(--fa-gold)',
      lineHeight: 1,
      paddingTop: '2px'
    }
  }, String(i + 1).padStart(2, '0')), i < steps.length - 1 ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: '1px',
      flex: 1,
      background: 'var(--border-soft)',
      margin: '12px 0'
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: i < steps.length - 1 ? 'var(--space-7)' : 0
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 8px',
      font: 'var(--text-h4)',
      color: 'var(--text-body)'
    }
  }, step.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--text-body-sm)',
      color: 'var(--text-muted)',
      maxWidth: '52ch'
    }
  }, step.description)))));
}
Object.assign(__ds_scope, { Timeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Timeline.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizePad = {
  md: '12px 26px',
  lg: '16px 34px'
};
const sizeFont = {
  md: '15px',
  lg: '16px'
};
function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  onDark = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    fontFamily: 'var(--font-body)',
    fontSize: sizeFont[size] || sizeFont.md,
    fontWeight: 500,
    lineHeight: 1.2,
    padding: sizePad[size] || sizePad.md,
    minHeight: '44px',
    borderRadius: 'var(--radius-button)',
    border: '1px solid transparent',
    cursor: 'pointer',
    textDecoration: 'none',
    boxSizing: 'border-box',
    transition: 'transform var(--duration-quick) var(--ease-out), background var(--duration-quick) var(--ease-out), box-shadow var(--duration-quick) var(--ease-out), color var(--duration-quick) var(--ease-out)',
    transform: 'translateY(0)'
  };
  let look = {};
  if (variant === 'primary') {
    look = onDark ? {
      background: hover ? 'var(--fa-white)' : 'var(--fa-warm-white)',
      color: 'var(--fa-forest)',
      transform: hover ? 'translateY(-2px)' : 'translateY(0)',
      boxShadow: hover ? 'var(--shadow-lift)' : 'none'
    } : {
      background: hover ? 'var(--color-primary-hover)' : 'var(--color-primary)',
      color: 'var(--fa-warm-white)',
      transform: hover ? 'translateY(-2px)' : 'translateY(0)',
      boxShadow: hover ? 'var(--shadow-lift)' : 'none'
    };
  } else if (variant === 'secondary') {
    look = {
      background: hover ? 'var(--surface-tint)' : 'var(--surface-card)',
      color: 'var(--fa-forest)',
      border: '1px solid var(--fa-forest)'
    };
  } else {
    look = {
      background: 'transparent',
      color: onDark ? 'var(--text-on-dark)' : 'var(--fa-forest)',
      padding: '12px 6px',
      textDecoration: hover ? 'underline' : 'none',
      textUnderlineOffset: '5px'
    };
  }
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: Object.assign({}, base, look, style)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  hover = false,
  padding = 'var(--space-5)',
  dark = false,
  style
}) {
  const [isHover, setIsHover] = React.useState(false);
  const lifted = hover && isHover;
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setIsHover(true),
    onMouseLeave: () => setIsHover(false),
    style: Object.assign({
      background: dark ? 'var(--surface-dark)' : 'var(--surface-card)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-body)',
      border: dark ? '1px solid var(--border-on-dark)' : '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-card)',
      padding: padding,
      boxShadow: lifted ? 'var(--shadow-lift)' : 'var(--shadow-soft)',
      transform: lifted ? 'translateY(-3px)' : 'translateY(0)',
      transition: 'transform var(--duration-calm) var(--ease-out), box-shadow var(--duration-calm) var(--ease-out)',
      boxSizing: 'border-box'
    }, style)
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/* Lucide icons only — stroke 1.75, sizes 20/24/32.
   Requires the Lucide UMD bundle: https://unpkg.com/lucide@0.462.0/dist/umd/lucide.min.js */
function renderNode(entry, key) {
  // Lucide icon nodes are [tag, attrs] or [tag, attrs, children]; guard everything.
  if (!Array.isArray(entry) || typeof entry[0] !== 'string') return null;
  const tag = entry[0];
  const attrs = entry[1] && typeof entry[1] === 'object' && !Array.isArray(entry[1]) ? entry[1] : {};
  const kids = Array.isArray(entry[2]) ? entry[2].map((c, i) => renderNode(c, i)) : null;
  return React.createElement(tag, Object.assign({
    key: key
  }, attrs), kids);
}
function Icon({
  name,
  size = 24,
  strokeWidth = 1.75,
  color = 'currentColor',
  style
}) {
  const key = String(name || '').replace(/(^|-)([a-z0-9])/g, (m, p, c) => c.toUpperCase());
  const lib = typeof window !== 'undefined' && window.lucide && window.lucide.icons || {};
  let node = lib[key];
  // Some lucide UMD builds wrap the node list one level deep ([tag, attrs, children] triple at top).
  if (Array.isArray(node) && typeof node[0] === 'string') node = Array.isArray(node[2]) ? node[2] : [node];
  if (!Array.isArray(node)) node = null;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style,
    "aria-hidden": "true"
  }, node ? node.map((child, i) => renderNode(child, i)) : null);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/FAQ.jsx
try { (() => {
function FAQ({
  items = [],
  style
}) {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      borderTop: '1px solid var(--border-soft)'
    }, style)
  }, items.map((item, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--border-soft)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      "aria-expanded": isOpen,
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-5)',
        width: '100%',
        padding: 'var(--space-5) 0',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        font: 'var(--text-h4)',
        fontFamily: 'var(--font-body)',
        color: 'var(--text-body)'
      }
    }, item.q, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "plus",
      size: 20,
      color: "var(--fa-gold)",
      style: {
        flexShrink: 0,
        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
        transition: 'transform var(--duration-quick) var(--ease-out)'
      }
    })), isOpen ? /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        padding: '0 0 var(--space-5)',
        font: 'var(--text-body-sm)',
        color: 'var(--text-muted)',
        maxWidth: '60ch'
      }
    }, item.a) : null);
  }));
}
Object.assign(__ds_scope, { FAQ });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FAQ.jsx", error: String((e && e.message) || e) }); }

// components/content/IconCard.jsx
try { (() => {
function IconCard({
  icon = 'compass',
  title,
  description,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      alignItems: 'flex-start'
    }, style)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24,
    color: "var(--fa-gold)"
  }), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      font: 'var(--text-h4)',
      color: 'var(--text-body)'
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, description) : null);
}
Object.assign(__ds_scope, { IconCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/IconCard.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureGrid.jsx
try { (() => {
function FeatureGrid({
  items = [],
  columns = 3,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      display: 'grid',
      gridTemplateColumns: 'repeat(' + columns + ', 1fr)',
      gap: 'var(--space-8) var(--space-7)'
    }, style)
  }, items.map((item, i) => /*#__PURE__*/React.createElement(__ds_scope.IconCard, {
    key: i,
    icon: item.icon,
    title: item.title,
    description: item.description
  })));
}
Object.assign(__ds_scope, { FeatureGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureGrid.jsx", error: String((e && e.message) || e) }); }

// components/content/ServiceCard.jsx
try { (() => {
function ServiceCard({
  icon = 'building-2',
  title,
  description,
  linkLabel = 'Learn more',
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: style
  }, /*#__PURE__*/React.createElement(__ds_scope.Card, {
    hover: true,
    padding: "var(--space-6)",
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 32,
    color: "var(--fa-forest)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--text-h3)',
      color: 'var(--text-body)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--text-body-sm)',
      color: 'var(--text-muted)',
      flex: 1
    }
  }, description), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      font: 'var(--text-body-sm)',
      fontWeight: 500,
      color: 'var(--fa-forest)',
      textDecoration: hover ? 'underline' : 'none',
      textUnderlineOffset: '5px'
    }
  }, linkLabel, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 20,
    style: {
      transform: hover ? 'translateX(3px)' : 'none',
      transition: 'transform var(--duration-quick) var(--ease-out)'
    }
  }))));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  type = 'text',
  placeholder,
  multiline = false,
  rows = 5,
  error,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const field = {
    font: 'var(--text-body-sm)',
    fontFamily: 'var(--font-body)',
    color: 'var(--text-body)',
    background: 'var(--surface-card)',
    border: '1px solid ' + (error ? 'var(--color-error)' : focus ? 'var(--fa-forest)' : 'var(--border-soft)'),
    borderRadius: 'var(--radius-input)',
    padding: '13px 16px',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
    resize: 'vertical',
    transition: 'border-color var(--duration-quick) var(--ease-out)'
  };
  const Tag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("label", {
    style: Object.assign({
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }, style)
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      fontWeight: 500,
      color: 'var(--text-body)'
    }
  }, label) : null, /*#__PURE__*/React.createElement(Tag, _extends({
    type: multiline ? undefined : type,
    rows: multiline ? rows : undefined,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: field
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--color-error)'
    }
  }, error) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/content/ContactForm.jsx
try { (() => {
function ContactForm({
  onSubmit,
  submitLabel = 'Send message',
  style
}) {
  const [sent, setSent] = React.useState(false);
  const handle = e => {
    e.preventDefault();
    setSent(true);
    if (onSubmit) onSubmit(e);
  };
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: handle,
    style: Object.assign({
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Name",
    placeholder: "Your full name",
    required: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Email",
    type: "email",
    placeholder: "you@company.com",
    required: true
  })), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "How can we help?",
    multiline: true,
    placeholder: "Tell us briefly about your plans in Sweden."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    type: "submit"
  }, submitLabel), sent ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--color-success)'
    }
  }, "Thank you. We will reply within one business day.") : null));
}
Object.assign(__ds_scope, { ContactForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ContactForm.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeader.jsx
try { (() => {
function SectionHeader({
  overline,
  title,
  description,
  align = 'left',
  onDark = false,
  style
}) {
  const centered = align === 'center';
  return /*#__PURE__*/React.createElement("header", {
    style: Object.assign({
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      alignItems: centered ? 'center' : 'flex-start',
      textAlign: centered ? 'center' : 'left',
      maxWidth: 'var(--content-width)',
      margin: centered ? '0 auto' : '0'
    }, style)
  }, overline ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--text-overline)',
      letterSpacing: 'var(--tracking-overline)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, overline) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--text-h2)',
      letterSpacing: 'var(--tracking-display)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-body)'
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--text-lead)',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
      maxWidth: '58ch'
    }
  }, description) : null);
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CTA.jsx
try { (() => {
/* Large centered high-contrast block. One primary action. */
function CTA({
  overline,
  title,
  description,
  ctaLabel = 'Book a consultation',
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: Object.assign({
      background: 'var(--surface-dark)',
      borderRadius: 'var(--radius-card)',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--space-8)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 'var(--space-5)',
      boxSizing: 'border-box'
    }, style)
  }, overline ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--text-overline)',
      letterSpacing: 'var(--tracking-overline)',
      textTransform: 'uppercase',
      color: 'var(--fa-gold-soft)'
    }
  }, overline) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--text-h1)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-on-dark)',
      maxWidth: '20ch'
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--text-lead)',
      color: 'var(--text-on-dark-muted)',
      maxWidth: '48ch'
    }
  }, description) : null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "lg",
    onDark: true,
    style: {
      marginTop: 'var(--space-3)'
    }
  }, ctaLabel));
}
Object.assign(__ds_scope, { CTA });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CTA.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Footer.jsx
try { (() => {
function Footer({
  brand = 'Fortis Anima',
  tagline = 'Premium consulting for establishing and growing in Sweden.',
  columns = [{
    title: 'Services',
    links: ['Company formation', 'Relocation', 'Advisory', 'Compliance']
  }, {
    title: 'Company',
    links: ['About', 'Approach', 'Insights', 'Careers']
  }, {
    title: 'Contact',
    links: ['hello@fortisanima.se', 'Stockholm, Sweden']
  }],
  note = '© 2026 Fortis Anima Consulting AB',
  style
}) {
  const [hovered, setHovered] = React.useState(null);
  return /*#__PURE__*/React.createElement("footer", {
    style: Object.assign({
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)'
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) 40px var(--space-6)',
      boxSizing: 'border-box',
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '26px',
      fontWeight: 600
    }
  }, brand), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--text-body-sm)',
      color: 'var(--text-on-dark-muted)',
      maxWidth: '30ch'
    }
  }, tagline)), columns.map((col, ci) => /*#__PURE__*/React.createElement("div", {
    key: ci,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-overline)',
      letterSpacing: 'var(--tracking-overline)',
      textTransform: 'uppercase',
      color: 'var(--fa-gold-soft)'
    }
  }, col.title), col.links.map((l, li) => /*#__PURE__*/React.createElement("a", {
    key: li,
    href: "#",
    onMouseEnter: () => setHovered(ci + '-' + li),
    onMouseLeave: () => setHovered(null),
    style: {
      font: 'var(--text-body-sm)',
      color: hovered === ci + '-' + li ? 'var(--text-on-dark)' : 'var(--text-on-dark-muted)',
      textDecoration: 'none',
      transition: 'color var(--duration-quick) var(--ease-out)'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 40px var(--space-6)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-on-dark)',
      paddingTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-on-dark-muted)'
    }
  }, note))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Footer.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Hero.jsx
try { (() => {
/* Large editorial hero. If no `image` URL is given, a quiet placeholder
   block is rendered — replace with real photography (natural daylight,
   Scandinavian interiors, cinematic composition). */
function Hero({
  overline,
  title,
  description,
  ctaLabel = 'Book a consultation',
  secondaryLabel,
  image,
  imageAlt = '',
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: Object.assign({
      display: 'grid',
      gridTemplateColumns: '1.05fr 1fr',
      gap: 'var(--space-8)',
      alignItems: 'center',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '96px 40px var(--section-pad)',
      boxSizing: 'border-box'
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      alignItems: 'flex-start'
    }
  }, overline ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--text-overline)',
      letterSpacing: 'var(--tracking-overline)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, overline) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: 'var(--text-display)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--fa-forest)'
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--text-lead)',
      color: 'var(--text-muted)',
      maxWidth: '46ch'
    }
  }, description) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-2)'
    }
  }, ctaLabel ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "lg"
  }, ctaLabel) : null, secondaryLabel ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "lg"
  }, secondaryLabel) : null)), image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: '100%',
      aspectRatio: '4 / 5',
      objectFit: 'cover',
      borderRadius: 'var(--radius-image)',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '4 / 5',
      borderRadius: 'var(--radius-image)',
      background: 'var(--surface-tint)',
      border: '1px solid var(--border-soft)',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 'var(--space-5)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, "Photography placeholder \u2014 natural daylight, Scandinavian interior")));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Navigation.jsx
try { (() => {
function Navigation({
  brand = 'Fortis Anima',
  links = [{
    label: 'Services',
    href: '#'
  }, {
    label: 'About',
    href: '#'
  }, {
    label: 'Insights',
    href: '#'
  }, {
    label: 'Contact',
    href: '#'
  }],
  ctaLabel = 'Book a consultation',
  onDark = false,
  style
}) {
  const [hovered, setHovered] = React.useState(null);
  return /*#__PURE__*/React.createElement("nav", {
    style: Object.assign({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-6)',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '22px 40px',
      boxSizing: 'border-box',
      background: onDark ? 'transparent' : 'var(--surface-page)',
      borderBottom: onDark ? '1px solid var(--border-on-dark)' : '1px solid var(--border-soft)'
    }, style)
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '24px',
      fontWeight: 600,
      letterSpacing: '0.01em',
      color: onDark ? 'var(--text-on-dark)' : 'var(--fa-forest)',
      textDecoration: 'none'
    }
  }, brand), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: l.href,
    onMouseEnter: () => setHovered(i),
    onMouseLeave: () => setHovered(null),
    style: {
      font: 'var(--text-body-sm)',
      fontWeight: 500,
      color: hovered === i ? 'var(--fa-gold)' : onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
      textDecoration: 'none',
      transition: 'color var(--duration-quick) var(--ease-out)'
    }
  }, l.label)), ctaLabel ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    onDark: onDark
  }, ctaLabel) : null));
}
Object.assign(__ds_scope, { Navigation });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Navigation.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutScreen.jsx
try { (() => {
const DS3 = window.FortisAnimaDesignSystem_3f4225;
const {
  SectionHeader: SH3,
  TeamCard: TC3,
  StatisticCard: ST3,
  CTA: CTA3
} = DS3;
function AboutScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '96px 40px var(--space-9)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(SH3, {
    overline: "About",
    title: "Strong in spirit. Precise in practice.",
    description: "Fortis Anima is a boutique consultancy in Stockholm, helping international founders and companies make Sweden home."
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) 40px',
      boxSizing: 'border-box',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(ST3, {
    value: "2014",
    label: "Founded in Stockholm",
    onDark: true
  }), /*#__PURE__*/React.createElement(ST3, {
    value: "8",
    label: "Nationalities on the team",
    onDark: true
  }), /*#__PURE__*/React.createElement(ST3, {
    value: "1",
    label: "Partner on every engagement",
    onDark: true
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--section-pad) 40px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(SH3, {
    overline: "Team",
    title: "The people you will work with",
    style: {
      marginBottom: 'var(--space-8)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(TC3, {
    name: "Anna Lindqvist",
    role: "Founding Partner"
  }), /*#__PURE__*/React.createElement(TC3, {
    name: "Johan Berg",
    role: "Partner, Advisory"
  }), /*#__PURE__*/React.createElement(TC3, {
    name: "Maria Ekstr\xF6m",
    role: "Head of Relocation"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 40px var(--section-pad)'
    }
  }, /*#__PURE__*/React.createElement(CTA3, {
    title: "Let's talk about Sweden.",
    ctaLabel: "Book a consultation"
  })));
}
window.AboutScreen = AboutScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
const DS4 = window.FortisAnimaDesignSystem_3f4225;
const {
  SectionHeader: SH4,
  ContactForm: CF4,
  IconCard: IC4
} = DS4;
function ContactScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '96px 40px var(--section-pad)',
      boxSizing: 'border-box',
      display: 'grid',
      gridTemplateColumns: '1fr 1.3fr',
      gap: 'var(--space-9)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(SH4, {
    overline: "Contact",
    title: "Start the conversation",
    description: "Tell us briefly about your plans. We reply within one business day."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(IC4, {
    icon: "mail",
    title: "hello@fortisanima.se"
  }), /*#__PURE__*/React.createElement(IC4, {
    icon: "map-pin",
    title: "Stockholm, Sweden"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-card)',
      padding: 'var(--space-7)',
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement(CF4, null))));
}
window.ContactScreen = ContactScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const DS = window.FortisAnimaDesignSystem_3f4225;
const {
  Hero,
  SectionHeader,
  ServiceCard,
  StatisticCard,
  Timeline,
  CTA,
  FeatureGrid
} = DS;
function HomeScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    overline: "Consulting for Sweden",
    title: "Your foundation in Sweden.",
    description: "We help entrepreneurs, companies and international professionals establish and grow \u2014 with precision and calm.",
    ctaLabel: "Book a consultation",
    secondaryLabel: "Our services"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 40px var(--section-pad)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    overline: "Services",
    title: "Everything you need to establish",
    description: "Three practices, one long-term partnership.",
    style: {
      marginBottom: 'var(--space-8)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "building-2",
    title: "Company formation",
    description: "AB registration, banking, F-tax and everything between."
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "compass",
    title: "Relocation",
    description: "Permits, housing and settling in \u2014 handled with care."
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "trending-up",
    title: "Growth advisory",
    description: "Strategy and partnerships for the Swedish market."
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-tint)',
      borderTop: '1px solid var(--border-soft)',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) 40px',
      boxSizing: 'border-box',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(StatisticCard, {
    value: "200+",
    label: "Companies established"
  }), /*#__PURE__*/React.createElement(StatisticCard, {
    value: "12",
    label: "Years in Sweden"
  }), /*#__PURE__*/React.createElement(StatisticCard, {
    value: "96%",
    label: "Clients who stay with us"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--section-pad) 40px',
      boxSizing: 'border-box',
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: 'var(--space-9)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    overline: "How we work",
    title: "A calm, precise process",
    description: "No noise, no surprises. Three stages from first call to long-term partnership."
  }), /*#__PURE__*/React.createElement(Timeline, {
    steps: [{
      title: 'Initial consultation',
      description: 'We map your goals, timeline and constraints in a 30-minute conversation.'
    }, {
      title: 'Establishment',
      description: 'Registration, permits, banking and compliance — handled end to end.'
    }, {
      title: 'Ongoing partnership',
      description: 'Advisory, accounting and introductions as you grow.'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 40px var(--section-pad)'
    }
  }, /*#__PURE__*/React.createElement(CTA, {
    overline: "Next step",
    title: "Ready to establish in Sweden?",
    description: "A 30-minute conversation is the best place to start.",
    ctaLabel: "Book a consultation"
  })));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesScreen.jsx
try { (() => {
const DS2 = window.FortisAnimaDesignSystem_3f4225;
const {
  SectionHeader: SH2,
  ServiceCard: SC2,
  FAQ: FAQ2,
  CTA: CTA2,
  FeatureGrid: FG2
} = DS2;
function ServicesScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '96px 40px var(--space-9)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(SH2, {
    overline: "Services",
    title: "Three practices. One partnership.",
    description: "Every engagement is led by a partner and built for the long term."
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 40px var(--section-pad)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-6)',
      marginBottom: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(SC2, {
    icon: "building-2",
    title: "Company formation",
    description: "AB registration, share capital, banking relationships, F-tax and VAT \u2014 from decision to first invoice."
  }), /*#__PURE__*/React.createElement(SC2, {
    icon: "compass",
    title: "Relocation",
    description: "Work and residence permits, personnummer, housing and schools. For founders, families and key hires."
  }), /*#__PURE__*/React.createElement(SC2, {
    icon: "trending-up",
    title: "Growth advisory",
    description: "Market entry strategy, hiring, partnerships and introductions across our Swedish network."
  })), /*#__PURE__*/React.createElement(FG2, {
    items: [{
      icon: 'scale',
      title: 'Compliance',
      description: 'Accounting, tax and legal setup done right the first time.'
    }, {
      icon: 'landmark',
      title: 'Banking',
      description: 'Established relationships with Swedish banks.'
    }, {
      icon: 'handshake',
      title: 'Network',
      description: 'Introductions to lawyers, accountants and investors.'
    }]
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--content-width)',
      margin: '0 auto',
      padding: '0 40px var(--section-pad)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(SH2, {
    overline: "Questions",
    title: "Frequently asked",
    style: {
      marginBottom: 'var(--space-6)'
    }
  }), /*#__PURE__*/React.createElement(FAQ2, {
    items: [{
      q: 'How long does company registration take?',
      a: 'Typically two to four weeks for an AB, depending mostly on banking. We prepare everything in parallel to keep the timeline short.'
    }, {
      q: 'Do you work with international founders?',
      a: 'Yes — most of our clients are establishing in Sweden from abroad. We handle the process end to end, in English.'
    }, {
      q: 'What does an engagement cost?',
      a: 'Fixed fees for establishment work, agreed before we start. Advisory is retained monthly.'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 40px var(--section-pad)'
    }
  }, /*#__PURE__*/React.createElement(CTA2, {
    title: "Tell us about your plans.",
    ctaLabel: "Book a consultation"
  })));
}
window.ServicesScreen = ServicesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ContactForm = __ds_scope.ContactForm;

__ds_ns.FAQ = __ds_scope.FAQ;

__ds_ns.FeatureGrid = __ds_scope.FeatureGrid;

__ds_ns.IconCard = __ds_scope.IconCard;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StatisticCard = __ds_scope.StatisticCard;

__ds_ns.TeamCard = __ds_scope.TeamCard;

__ds_ns.Timeline = __ds_scope.Timeline;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.CTA = __ds_scope.CTA;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.Navigation = __ds_scope.Navigation;

})();
