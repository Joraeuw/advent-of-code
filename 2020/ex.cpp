#include<iostream>
#include<vector>

#include<cmath>

int main() {

  long long tests;
  std::cin >> tests;

  while (tests--) {
    long long n, h;
    std::cin >> n >> h;

    std::vector<long long> arr(n);
    for (long long i = 0; i < n; i++)
      std::cin >> arr[i];

    const long long size = arr.size();
    long long currMax = arr[0];
    long long sum = 0;
    for (long long idx = 1; idx < size; idx++)
    {
      if ((arr[idx - 1] < arr[idx] && arr[idx] >= currMax) || arr[idx] > currMax)
        currMax = arr[idx];
      sum += 100 * std::max(std::min(h, currMax) - arr[idx], 0ll);
    }
    std::cout << sum;
  }
}