# Intro 
# The berlin clock is the first ever published clock . 
# IT is composed of four one round light , and 4 rows of lights

# The first round light indicates seconds , if On the second is even if OFF the second is ODD
# The second row is composed of 4 lights that , and every light represents 5 full hours 
# The thirds row is composed of 4 light , and every light forms 1 full hours , 

# The fourth row is composed of 11 lights each with a value of 5 minutes , except of the red one wich are successively (15 , 30 and 45 minutes each )


def berlin_clock(time)

    #standard clock data
    times = time.split(":");
    hours = times[0]
    minutes = times[1]
    seconds = times[2].to_i

    #Berlin clock data
    secondsRow = "#{ seconds.even? ? 'Y' : 'O'}"
    puts secondsRow
end 


berlin_clock("12:56:01")