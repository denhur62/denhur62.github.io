---
title: 평범한 배낭 
subtitle: BOJ Knapsack Problem
tags: Algorithm Knapsack DP
---



#  백준 12865 문제

[BOJ](https://www.acmicpc.net/problem/12865]) 해당 문제를 보면 그리디로 풀 수 없고 다이나믹 프로그래밍으로 풀어야 한다.

가장 유명한 방법으로 [knapsack](https://gsmesie692.tistory.com/113) 을 사용하려고 처음에는 재귀로 풀었다.  

```python
import sys

N, bag = map(int, input().split())
weight = []
val = []
for i in range(N):
    a, b = map(int, input().split())
    weight.append(a)
    val.append(b)


def DP(bag, n):
    if bag == 0 or n == 0:
        return 0
    if weight[n-1] > bag:
        return DP(bag, n-1)
    else:
        return max(val[n-1]+DP(bag-weight[n-1], n-1), DP(bag, n-1))


print(DP(bag, N))
```

<br/>

하지만 시간초과가 나왔을 때는 재귀깊이를 설정 해주지 않아서 난줄 알고 

`sys.setrecursionlimit(10**6)` 를 추가해주었으나 역시나 시간초과가 나왔다.

또한 재귀깊이 에러는 `런타임 에러` 나온다.

아무래도 파이썬 함수를 실행하는 거에서 시간을 더 먹는 것 같다는 결론을 내리고

어쩔수 없이 2차원 배열을 사용하여 풀도록 하였다.  



```python
import sys
input = sys.stdin.readline

N, K = map(int, input().split())
dp = [ [0]*(K+2) for _ in range(N+1) ]

weight = []
value = []
weight.append(0)
value.append(0)
for i in range(1, N+1):
    w, v = map(int, input().split())
    weight.append(w)
    value.append(v)

for i in range(1, N+1):
    for j in range(1, K+1):
        if j >= weight[i]:
            dp[i][j] = max(dp[i-1][j], dp[i-1][j-weight[i]] + value[i])
        else:
            dp[i][j] = dp[i-1][j]

print(dp[N][K])
```

<br/>

인터넷에서 가장 유명한 방법이기도 하며 다른 사람들 code를 구경하던 중, 

dictionary를 활용하여 푸는 방법이 있었는데 잘 짠 코드 인 것 같아 공유 하려고 한다.   



```python
import sys
read = sys.stdin.readline


def solve():
    N, max_weight = map(int, read().split())
    dp = {0: 0}

    for _ in range(N):
        w, v = map(int, read().split())
        tmp = {}
        for prev_w, prev_v in dp.items():
            if prev_w + w <= max_weight and dp.get(prev_w + w, 0) < prev_v + v:
                tmp[prev_w + w] = prev_v + v
        dp.update(tmp)

    print(max(dp.values()))


solve()
```

<br/>



