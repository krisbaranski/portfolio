import React from 'react';
import Anagram from 'react-anagram-animation';

export default function Title() {
  return (
    <Anagram
      words={[
        'eveDtorPfo perlendFro pernoliot',
        'Frontend Developer Portfolio',
      ]}
      animationOptions={{
        waitToStart: 2000,
        randomStartMin: 0,
        randomStartMax: 0,
        randomReverseMin: 6000,
        randomReverseMax: 6000,
        loopAnimation: 10000,
      }}
    />
  );
}
