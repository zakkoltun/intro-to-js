false || (true && false);
// false

true || (1 + 2);
// true (short circuits after evaluating left side)

(1 + 2) || true;
// true (short circuits)
// actual answer: 3

true && (1 + 2);
// true
// actual answer: 3

false && (1 + 2);
// false (short circuits)

(1 + 2) && true;
// true

(32 * 4) >= 129;
// false (128 < 129)

false !== !true;
// false

true === 4;
// false. === compares values not truthiness

false === (847 === '847');
// true

false === (847 == '847');
// false

(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;
// true, since ((328 / 4) === 82) evaluates to true
