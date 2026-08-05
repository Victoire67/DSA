def listPosition(word)
  chars = word.chars
  n = chars.length

  counts = Hash.new(0)
  chars.each { |c| counts[c] += 1 }

  fact = [1]
  (1..n).each { |i| fact[i] = fact[i - 1] * i }

  perm_count = lambda do |total|
    denom = 1
    counts.each_value { |v| denom *= fact[v] }
    fact[total] / denom
  end

  rank = 0
  remaining = n

  chars.each do |c|
    counts.keys.sort.each do |letter|
      break if letter >= c
      next if counts[letter] == 0

      counts[letter] -= 1
      rank += perm_count.call(remaining - 1)
      counts[letter] += 1
    end

    counts[c] -= 1
    remaining -= 1
  end

  rank + 1
end