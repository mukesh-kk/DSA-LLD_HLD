# SRP - one actor one reason to chagne on reponsiblity

class Report :
    def __init__(self,content):
        self.content=content

    def generate(self):
        print(f"My Report {self.content}")
    
    def save_to_file(self):  # what if i want to save to data base not on disk?
        with open('sdkadklas','w') as file:
            file.write(self.content)
    def send_report(self): #what if i want to send via whatsapp
        pass
        # mail to admins

# Solution ?-------------->

class Report :
    def __init__(self,content):
        self.content=content

    def generate(self):
        print(f"My Report {self.content}")
class ReportSaver:
    def __init__(self,content):
        self.content=content

    def save_disk(self):
        print('save to disk')
        with open('sdsd','w') as file:
            file.write(self.content)
    def save_db(self):
        print('save to db')
        pass

class ReportSender:
    def __init__(self,content):
        self.content=content
    
    def send_via_mail(self):
        pass
    def send_via_whatsapp(self):
        pass
