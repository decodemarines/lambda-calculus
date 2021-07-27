```
T = λ x y. x
F = λ x y. y
not = λ b . b F T
or = λ a b . a a b
and = λ a b . a b a
xor = λ a b . a (not b) b
Succ = λ n f x . f (n f x)
+1 = Succ
is0 = λ x . x F not F

0 = λ s z . z
1 = λ s z . s (z)
2 = λ s z . s (s (z))
3 = λ s z . s (s (s (z)))
4 = Succ 3
5 = Succ 4
6 = Succ 5
7 = Succ 6
8 = Succ 7
9 = Succ 8
10 = Succ 9
11 = Succ 10
12 = Succ 11
13 = Succ 12
14 = Succ 13
15 = Succ 14
16 = Succ 15
17 = Succ 16
18 = Succ 17
19 = Succ 18
20 = Succ 19

pair = λ a b s . s a b
p = pair x y
fst = λ p . p T
snd = λ p . p F
tr = λ p . pair (snd p) (Succ (snd p))
-1 = λ n . fst (n tr (pair 0 0))
- = λ a b . b -1 a


* = λ a b f. a (b f)
--* 2 1
˃= = λ x y . is0 (- y x)
˂= = λ x y . is0 (- x y)
˃ = λ x y . not (˃= y x )
˂ = λ x y . not (˂= y x)

Y = λ y. (λ x. y (x x))(λ x. y (x x))

divrec = λ r a b. ˂ a b 0 (+1 (r (- a b) b))
div = λ a b. is0 b error:division_by_0 (Y divrec a b)
div 2 2 -- error:division_by_0
```
