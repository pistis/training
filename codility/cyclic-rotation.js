function solution(A, K) {
    if (K === 0 || K === A.length) return A;

    const pivot = K > A.length ? A.length - (K % A.length) : A.length - K;
    return A.slice(pivot).concat(A.slice(0, pivot));
}

solution([3, 8, 9, 7, 6], 0);
solution([3, 8, 9, 7, 6], 1);
solution([3, 8, 9, 7, 6], 2);
solution([3, 8, 9, 7, 6], 3);
solution([3, 8, 9, 7, 6], 4);
solution([3, 8, 9, 7, 6], 5);
solution([3, 8, 9, 7, 6], 6);