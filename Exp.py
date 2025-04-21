def find_missing_numbers(arr):
    i = 0
    while i < len(arr):
        correct_index = arr[i] - 1
        # Check bounds and avoid infinite loop with duplicates
        if arr[i] <= len(arr) and arr[i] != arr[correct_index]:
            arr[i], arr[correct_index] = arr[correct_index], arr[i]
        else:
            i += 1
    print(arr)
    # After cyclic sort, arr[i] should be i + 1
    # After cyclic sort, collect missing numbers
    missing = []
    for i in range(len(arr)):
        if arr[i] != i + 1:
            missing.append(i + 1)

    return missing

arr = [4, 3, 2, 7, 8, 2, 3, 1]
print(find_missing_numbers(arr))
# Output: [5, 6]
