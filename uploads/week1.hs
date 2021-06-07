
timesTen :: Int -> Int
timesTen x = 10 * x

sumThree :: Int -> Int -> Int -> Int  
sumThree a b c = a+b+c 

areaOfCircle :: Float  -> Float 
areaOfCircle r = pi * r^2

volumeOfCylinder :: Float -> Float -> Float 
volumeOfCylinder r h = h * areaOfCircle r

distance :: Float  -> Float -> Float -> Float -> Float 
distance x1 x2 y1 y2 = sqrt((y1-y2)^2+(x1-x2)^2)

threeDifferent :: Int -> Int -> Int -> Bool 
threeDifferent a b c =
      a /= b && b /= c && c /= a 

divisibleBy :: Int -> Int -> Bool 
divisibleBy x y = mod x y == 0

isEven :: Int -> Bool
isEven x = divisibleBy x 2

averageThree :: Int -> Int -> Int -> Float 
averageThree a b c = fromIntegral (sumThree a b c) / 3

absolute :: Int -> Int
absolute x
      | x<0 = -x
      | otherwise = x


gcd :: Int -> Int -> Int
gcd a b 
    |a>0 && b>0 && a==b = a
    |a>0 && b>0 && a>b = a-b
    |a>0 && b>0 && b>a = b-a


