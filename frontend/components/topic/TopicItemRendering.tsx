import React, { useState, useEffect } from 'react';
import { CodeInF } from './TopicInterface';

interface Props {
  codes: CodeInF[];
}

export const TopicItemRendering = ({ codes }: Props) => {
  const [src, setSrc] = useState('');
  const html = codes.find((e) => e.language === 'HTML')?.content;
  const css = codes.find((e) => e.language === 'CSS')?.content;
  const js = codes.find((e) => e.language === 'JavaScript')?.content;

  const srcCode = `
    <html>
      <body>${html ? html : ''}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
  `;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [srcCode]);

  return (
    <div className="h-full w-full">
      <iframe
        srcDoc={src}
        sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-scripts allow-top-navigation-by-user-activation allow-downloads allow-presentation"
        allow="accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write"
        scrolling="auto"
        // allowTransparency={true} // TS 에러가 나거나 콘솔에 뜸
        loading="lazy"
      />
    </div>
  );
};
