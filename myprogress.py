import matplotlib.pyplot as plt  # [missing-module-docstring]
data= [
    ['2024-11-15',1337334],
    ['2024-11-16',1265160],
    ]



# Data from the input
data = [
    ['2024-11-15', 1337334],
    ['2024-11-16', 1265160],
    
]

# Extracting dates and values for plotting
dates = [item[0] for item in data]
values = [-item[1] for item in data]

# Creating a plot
plt.figure(figsize=(8, 5))
plt.plot(dates, values, marker='o', linestyle='-', color='b', label='Value')
plt.xlabel('Date')
plt.ylabel('Value')
plt.title('My LeetCode Progress')
plt.xticks(rotation=45)
plt.grid(visible=True, which='both', linestyle='--', linewidth=0.5)
plt.legend()
plt.tight_layout()
plt.show()
