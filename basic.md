1. Basics
   ```
   0 = λ s z. z
   1 = λ s z. s (z)
   2 = λ s z. s ( s (z))
   3 = λ s z. s ( s ( s (z)))
   4 = λ s z. s ( s ( s ( s (z))))

5 = λ s z. s ( s ( s ( s ( s (z)))))

-- SUCCESSOR
S = λ w y x. y (w y x)
-- S 0 = (λ w y x. y (w y x)) (λ s z. z)
-- S 0 = (λ y x. y ( (λ s z. z) y x))
-- S 0 = (λ y x. y ( (λ z. z) x))
-- S 0 = (λ y x. y (x))

-- S 1 = (λ w y x. y (w y x)) (λ s z. s (z))
-- S 1 = λ y x. y ((λ s z. s (z)) y x)
-- S 1 = λ y x. y (y (x))

-- S 1
-- S 2
-- S (S 1)

-- ADDITION

-- S 3
-- S (S 3)

-- MULTIPLICATION
mult = λ x y z. x (y z)
-- mult 2 2

-- CONDITIONALS
T = λ x y. x
F = λ x y. y

-- LOGICAL OPERATIONS
∧ = λ x y. x y (λ u v. v)
-- λxy.xyF
∨ = λ x y. x (λ u v. u) y
-- λxy.xTy
-- ∧ F T
-- ∧ T T

¬ = λ x. x (λ u v. v)(λ a b. a)  
-- λx.xFT
-- ¬ F

-- CONDITIONAL TEST
-- returns true if x=0

Z = λ x. x F ¬ F
-- Z 0 -- T
-- Z 4 -- 0
```
