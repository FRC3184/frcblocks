import urllib.request as request
from urllib.error import URLError
from http.client import HTTPException

def get_remote_version():
    response = request.urlopen("https://raw.githubusercontent.com/FRC3184/frcblocks/master/version.txt")
    version = response.read().decode('ascii')
    return version
def get_local_version():
    with open("version.txt", 'r') as file:
        return file.readlines()[0]
if __name__ == '__main__':
    print("Checking remote version...")
    try:
        remote = get_remote_version()
        local = None
        try:            
            local = get_local_version()
        except FileNotFoundError:
            print("Could not find version file. Try updating (http://github.com/FRC3184/frcblocks)")
        if local != None:
            if remote != local:
                print("New version available ({}). Download from http://github.com/FRC3184/frcblocks".format(remote))
            else:
                print("FRC Blocks is up to date")
    except (URLError, HTTPException):
        print("Trouble connecting. You may be offline.")
