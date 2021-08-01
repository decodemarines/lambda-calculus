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

-- INTEGERS

-- Define pos and neg integers as pairs of natural numbers

pos = λ n . pair T n
neg = λ n . pair F n

0' = pos 0
1' = pos 1
2' = pos 2
3' = pos 3
4' = pos 4
5' = pos 5
6' = pos 6
7' = pos 7
8' = pos 8
9' = pos 9
10' = pos 10
11' = pos 11
12' = pos 12
13' = pos 13
14' = pos 14
15' = pos 15
16' = pos 16
17' = pos 17
18' = pos 18
19' = pos 19

-0' = neg 0
-1' = neg 1
-2' = neg 2
-3' = neg 3
-4' = neg 4
-5' = neg 5
-6' = neg 6
-7' = neg 7
-8' = neg 8
-9' = neg 9
-10' = neg 10
-11' = neg 11
-12' = neg 12
-13' = neg 13
-14' = neg 14
-15' = neg 15
-16' = neg 16
-17' = neg 17
-18' = neg 18
-19' = neg 19

-- DEFINE ADDITION AND SUBSTRUCTION OF INTEGERS

abs  = snd  -- λ a . snd a
signof = fst -- λ a . fst a
signdiffers = λ a b . xor (signof a) (signof b) -- gives true if signs are different

-- abs 1' --1
-- abs -1' --1
-- signof -1' --0
-- signof 1' -- T
-- signdiffers 1' -1' --T
-- signdiffers 1' 1' -- 0 

max = λ a b . ˃ a b a b
min = λ a b . ˂ a b a b 

-- max 3 4
-- min 4 5

+ = +1
 
add = λ a b . signdiffers a b
-- if signs differ choose the sign of a greater number and substruct the min absolute value from the maximum one: 
-- signdiffers 1' -1' --T 
 (pair (˃ (abs a) (abs b) (signof a) (signof b)) (-(max (abs a) (abs b)) (min (abs a) (abs b))))
 
-- if signs are the same add absolute values:
-- signof -1' --0
 (pair (signof a) ((abs a) + (abs b))) 
  
-- add -1' 2'  
-- add -1' -1'

invert = λ int . pair (not (signof int)) (abs int)
-- invert -3' -- 3'
-- invert 3' -- -3'
sub = λ a b . add a (invert b)

-- sub 4' 2'
-- sub 4' -2'

-- DEFINE THE RATIONAL NUMBERS AS PAIRS OF INTEGERS

--divrec = λ r a b. ˂ a b 0 (+1 (r (- a b) b))
--div1 = λ a b. is0 b error:division_by_0 (Y divrec a b)
-- div1 2 2 -- error:division_by_0

divmod_rec = λ r a b q . ˂ a b (pair q a) (r (- a b) b (+1 q))
divmod = λ a b . is0 b error:division_by_0 (Y divmod_rec a b 0)
-- divmod 4 2 -- λs.s 2 0
div = λ a b . fst (divmod a b)
mod = λ a b . snd (divmod a b)
--mod 4 2
--div 4 2
GCD_rec = λ r a b . is0 b a (r b (mod a b))
GCD = λ a b . Y GCD_rec a b 
LCM = λ a b . ( or (is0 a 0) (is0 b 0)) div (* a b) (GCD a b)

-- LCM 3 4   12 

-- -- GCD 4 2
-- GCD 3 9

simplify = λ a b . (λ gcd . pair (div a gcd) (div b gcd)) (GCD a b)
-- simplify 4 2 -- λs.s 2 1
-- frac = λ n d . (λ ND . pair (signdiffers n d neg pos (snd ND)) (pos (snd ND))) (simplify (abs n) (abs d))




---1/2 = frac 4' -8'


--frac 1' -2' -- λs.s 2' 2'
--frac 4' -8'

mult_int = λ a b . signdiffers a b neg pos (* (abs a) (abs b))
-- mult_int -1' -1'




frac = λ n d . (λ ND . pair (signdiffers n d neg pos (fst ND)) (pos (snd ND))) (simplify (abs n) (abs d))
-- fst (frac 1' -2') -- -1'
-- snd (frac 1' -2')  --2
-- signof (fst (frac 2' -12')) --0

mult_frac = λ frac1 frac2 . frac 
 (mult_int (fst frac1) (fst frac2)) 
 (mult_int (snd frac1) (snd frac2))

-- signdiffers (signof (fst frac1)) (signof (fst frac2)) neg pos (* (abs (fst frac1)) (abs (fst frac2)))


-- mult_frac (frac 1' -2') (frac 1' -2')

add_frac = λ frac1 frac2 . (λ n1 d n2. frac
 (add n1 n2) 
 d
 ) (mult_int (fst frac1) (snd frac2)) (mult_int (snd frac1) (snd frac2)) (mult_int (snd frac1) (fst frac2))
 
reciprocate = λ fraction .pair (snd fraction) (fst fraction) 
div_frac =  λ frac1 frac2 . mult_frac frac1 (reciprocate frac2)

-- div_frac (frac 1' -2') (frac 2' -1')

negate_frac = λ frac . pair (invert (fst frac)) (snd frac)
sub_frac = λ frac1 frac2 . add_frac (frac1) (negate_frac frac2)

sub_frac (frac 2' 3') (frac 1' 2')


```
