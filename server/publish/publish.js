Meteor.publish(null, function () {
  if (!this.userId) return this.ready();
  return Meteor.users.find({_id: this.userId}, {
    fields: {
      'services.google.email': 1,
      'services.google.picture': 1,
      quickInfo: 1
    }
  });
});
Meteor.publish('quizData', function (eventId, email) {
  if (!this.userId) return this.ready();
  return EventQuizData.find({eventId: eventId, email: email})
});
Meteor.publish('subCountEvent', function (type, data) {
  console.log('dataSubCount' + type, data);
  if (type === 'EventCountAge')
    return Counts.publish(this, type + '-' + data.value, EventQuizData.find({
      eventId: data.eventId,
      age: "" + data.value
    }));
  if (type === 'EventCountTitle')
    return Counts.publish(this, type + '-' + data.value, EventQuizData.find({
      eventId: data.eventId,
      title: data.value
    }));
  if (type === 'EventCountRate')
    return Counts.publish(this, type + '-' + data.value, EventQuizData.find({
      eventId: data.eventId,
      rating: ""+data.value
    }));
});