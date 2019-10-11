from flask import Flask,render_template
import pusher
import threading

app = Flask(__name__)

channels_client = pusher.Pusher(
  app_id='from pusher site',
  key='from pusher site',
  secret='from pusher site',
  cluster='from pusher site',
  ssl=True
)

def printit(data):
  print(data)
  channels_client.trigger(u'my-channel', u'my-event', {
        u'data': data
    })


@app.route('/')
def index():
   return render_template("index.html")


# remove this end point

@app.route('/orders', methods=['GET'])
def order():
    channels_client.trigger(u'my-channel', u'my-event', {
        u'units': "50"
    })
    return "units logged"

if __name__ == '__main__':
   app.run(debug = True)