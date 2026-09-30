"use client";
import React, { useEffect } from 'react';

// Wrap the web component so React handles it nicely
export default function LiquidGlass({ children, className = "", ...props }) {
  useEffect(() => {
    // Import liquid-glass-js only on the client side
    import('liquid-glass-js').catch(console.error);
  }, []);

  return (
    <liquid-glass class={className} {...props}>
      {children}
    </liquid-glass>
  );
}
