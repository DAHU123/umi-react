import React, { useCallback, useState } from 'react';

const PageA = React.memo((props: any) => {
  const { onClick, children } = props;
  // console.log('PageA');
  return <button onClick={onClick}>{children}</button>;
});

const PageB = React.memo((props: any) => {
  const { onClick, name } = props;
  // console.log('PageB');
  return <button onClick={onClick}>{name}</button>;
});

export default function Study() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const handleClick1 = useCallback(() => {
    setA(a + 1);
  }, [a]);

  const handleClick2 = useCallback(() => {
    setB(b + 1);
  }, [b]);

  return (
    <>
      {/*点击A，B也渲染了，这很显然不是我想要看到的结果，我只想要A点击时只渲染A*/}
      <PageA onClick={handleClick1}>{a}</PageA>
      <PageB onClick={handleClick2} name={b} />
    </>
  );
}
