import React, { useState } from 'react';
import { useEffect } from 'react';

const FormComponent = ({ isGeorgian }) => {
  const [name, setName] = useState('');
  const [swimmingBehaviorGrade, setSwimmingBehaviorGrade] =
    useState('badBehavior');
  const [swimmingSkillGrade, setSwimmingSkillGrade] = useState('badSkill');
  const [generatedText, setGeneratedText] = useState('');
  const [error, setError] = useState('');
  const [isCopied, setIsCopied] = useState(false); // State to track copy status

  const skillTextVariations = {
    badSkill: isGeorgian
      ? [
          'ჩამორჩება კლასის დონეს,ის ვერ ართმევს ასაკისთვის შესაბამის დავალებებს თავს. საჭიროა უფრო მეტი მონდომება და ძალისხმევა რათა მალე დაეწიოს თანატოლებს.',
          'სრულყოფილად ვერ ასულებს პროგრამით გათვალისწინებულ მინიმუმს, უჭირს გამართულად ცურვა. აუცილებელია სისტემატიურად დაესწროს გაკვეთილებს რათა პროგრამას დაეწიოს. ',
          'მუდმივი პატარა შეცდომების გამო, ცურვისას იმაზე მეტ ენერგიას ფლანგავს ვიდრე საჭიროა,რაც ხელს უშლის გაკვეთილის განმავლობაში გამართული ტექნიკით ცურვაში, მეტი ვარჯიში და მასწავლებლის მიერ ხაზგასმულ დეტალებზე ყურადღების გამახვილებაა საჭირო რათა შეძლოს ეფექტურად ცურვა,რისი შესაძლებლობაც ნამდვილად აქვს. ',
          'მხოლოდ რამდენიმე დავალებას ასრულებს სწორად, არ სურს სხვა სტილების ათვისება და იმიზეზებს რომ არ შეუძლია, რის გამოც ხშირად უარს ამბობს დავალების შესრულებაზე,მიუხედავად მასწავლებლების დაჟინებული მოთხოვნებისა, შედეგად ის ვერ ვითარდება სრულყოფილად. აუცილებელია მიეჩვიოეს მასწავლებლების მიერ მიცემული დავალებების შესრულებას,მიუხედავად თავისი დამოკიდებულებისა დავალებისადმი რათა არ ჩამორჩეს კლასს.',
          'იმაზე უფრო დაბალ დონეზეა ვიდრე შეულია მას,რომ იყოს. ხშირად ზარმაცობს და არ ეკიდება დავალებებს გულმოდგინედ,რაც აფერხებს მის პროგრესს. აუცილებელია მეტი სერიოზულობით მოეკიდოს დავალებებს, რათა მიუახლოვდეს შესაძლებლობების რეალიზაციას.',
        ]
      : [
          'falls behind in class level, he does not fulfill the corresponding assignments for his age. More attention and effort are needed to catch up with peers later.',
          ' cannot fully reach the minimum required by the program. It is necessary to systematically attend classes in order to catch up with the program. ',
          'wastes more energy than necessary while swimming, due to constant small mistakes, , which hinders performance thoughout whole lesson, more training and attention to the details emphasized by the teacher are needed to be able to swim effectively. which you kid really has the ability to do. ',
          'Completes only a few assignments correctly, dislikes adopting different styles, often refuses to complete assignments due to preconceived notions about assignment completion. Despite frequent requests from teachers, rarely becomes fully compliant. Necessary to follow through on assignments given by teachers, despite aversion.',
          'is at lower level that could be. Often displays lazyness and isnt serious about completing the tasks,that hinders performance.Its important to become more serious about tasks,to not waste potential.',
        ],
    normalSkill: isGeorgian
      ? [
          'შეესაბამება ასაკის ნორმებს, მაგრამ შეუძლია კიდევ ბევრად მეტი, აქვს მცირე ხარვეზები და რამდენიმე სტილი დასახვეწი,ამიტომ აუცილებელია არ გააცდინოს გაკვეთილები.',
          'პროგრამას არ ჩამორჩება,მაგრამ არც უსწრებს. აქვს ხარვეზები მაგრამ არის დავალებები რასაც იდეალურად ასრულებს, საჭიროა უფრო გულმოდგინედ დაიხარჯოს რათა მოწინავე მოსწავლებთა რიგებში გადაინაცვლოს.',
          'ხშირად იჩენს თავს, როცა არ იზარებს, მაგრამ ჯერ არ არის საუკეთესოთა შორის. მას აქვს ტექნიკა დასახვეწი და კარგი იქნება თუ არ დაიზარებს ამას.',
          'ყველაფერს ცურავს კარგად, მაგრამ არა არის არაფერში საუკეთსო, აქვს დეტალებზე სამუშაო, სუნთქვაზე განაკუთრების, კარგი იქნება თუ  ცოტათი უფრო მეტს მოინდომებს.',
          'კარგად ცურავს რამდენიმე სტილს,მაგრამ უჭირს ზოგი. ფუნდამენტალები ბოლომდე არ აქვს დახვეწილი,მაგრამ არ ჩამოუვარდება თანატოლებში ბევრს, ვიცი რომ მეტი შეუძლია და ეს უბრალოდ დროისა და მონდომების საკითხია.',
        ]
      : [
          'fulfills its duties and norms,but can do lot more than that, yes there are small mistakes and few swimming styles to improve on but if, your kid wont miss many lessons I can guarantee you that it will not be a problem.',
          'doesnt fall behind the programm but isnt ahead of it either. Has few mistakes,but can do many tasks dieally, should become more hard-working to join ranks of the best swimmers in class.',
          'often shows excellent performance when not lazy ,but yet has lot to improve, especially technique-wise.',
          'swims everything well ,but isnt best at anything, needs to work more on deatiles,especially breathing.',
          'swims few styles very well ,but struggles with few also.Needs to perfect the fundamentals to improve, Can do way more and I think its only matter of time and will.',
        ],
    goodSkill: isGeorgian
      ? [
          'გამოირჩევა თანატოლებისგან დახვეწილი ცურავის სტილით, მხოლოდ მცირედი დეტალები აქვს გამოსასწორებელი.',
          'ერთ-ერთი საუკეთსოა კლასში, ტექნიკურად გამართულად ცურავს და თუ ასე გააგრძელა ბევრად უფრო მეტს მიაღწევს.',
          'ნამდვილად სამაგალითო მოსწავლეა, როცა ცურვას ეხება საქმე, ის ემთხვევა პროგრამის შესაბამის ნორმებს და უსწრებს კიდეც ,რათქმაუნდა აქვს ბევრი დეტალი დასახვეწი,ამგრამ ასაკის შესაბამისად ნამდვილად მაღალ საფეხურზე დგას.',
          'თანატოლებში გამოირჩევა გასაოცარი სისწრაფით რაც მისი შრომის შედეგია. დასახვეწი აქვს ტექნიკური ცურვა, მაგრამ დაწმუნებული ვარ ეს არ გაუჭირდება მას.',
          'გამომდინარე მისი ყოფაქცევისა და მონდომებისა არის ერთ-ერთი წამყვანი მოსწავლე კლასში რაც ნამდვილად არ არის გასაკვირი, მან უნდა გააგრძელოს ასე, რათა კიდევ უფრო გააუმჯობესოს თავისი შედეგები.',
        ]
      : [
          'swims very well, is apart from other classmates and only has small details to work on.',
          'one of the best in the class,has good technique and if continiues like that will be even better.',
          'definitely exemplary student when it comes to swimming, ahead of swimming programm, yes there are ofcourse many details to improve ,but for compared to classmates definitely few steps ahead.',
          'is very fast and thats not a surpize, cause of hardwork and determination of you kid.Needs to work more on technique.',
          'one of the leaders of the class when it comes to skill, should keep it up to go even on higher level which is definetly possible.',
        ],
  };
  const behaviorTextVariations = {
    badBehavior: isGeorgian
      ? [
          'კარგი ყოფაქცევით ვერ დაიკვეხნის, რაც ცუდად აისახება მის შედეგებზე, მან უნდა გამოასწოროს დამოკიდებულება ცურვის მიმართ.',
          'ხშირად არ გვემორცილება მასწაავლებლებს და არ ასრულებს მითითებულ დავალებებს. მუდმივ პრობლემას წარმოადგენს მისი წყლიდან ამოყვანაც კი',
          'უპატივცემულოდ ექცევა როგორც თანატოლებს,ისევე მასწავლებლებს რაც დიდი პრობლემას წარმოადგენს, მისი და თანაკლასელების განვითარებისთბის.',
          'ხშირად ზერელედ ეკიდება დავალებებს, უყურადღებოდ არის გაკვეთილის დროს და არ ისმენს მასწავლებლის დავალებებს, უნდა შეეცადოს რომ მეტი ყურადღებით მოეკიდოს ცურვას. ',
          'არ ცდილობს იმის ნახევარსაც კი რაც მას შეუძლია, ზარმაცობს და თამაშის მეტი არ აინტერესებს არაფერი, მეტი მონდომებაა საჭირო მისგან.',
        ]
      : [
          'doesnt behave well, and that hinders learning of swimming of course,should change attitude towards swimming lessons.',
          'often doesnt listen to teachers and obey rules,even getting out of the water is problem most of the time.',
          'treats teachers and classmates with little respect, Thats issue sometims during lessons.',
          'is unseriouss about tasks most of the time and doesnt listen to teachers. Should become more attentive!',
          'doesnt even ty half of whats possible. Only cares about playing and is quite lazy, needs to become more determined and attentive! ',
        ],
    normalBehavior: isGeorgian
      ? [
          'ზოგადად ჩართულია საგაკვეთილო პროცესში,მაგრამ აქვს გადახვევებიც, როცა არ ისმენს ხოლმე დავალებებს.',
          'არც კარგი ყოფაქცევით გამოირჩევა არც ცუდით, შეუძლია რომ ერთ-ერთი საუკეთესო მოსწავლე იყოს კლაში თუ უფრო ყურადღებით მოეკიდება გაკვეთილებს და არ იზარმაცებს.',
          'ზოგჯერ აყვება ხოლმე სხვებს არასახარბიელო აქტივობებში, მაგრამ ჯამში არ იქცევა ცუდად. ძალიან კარგია ის,რომ უმრავლეს შემთხვევაში დავალებებს გულმოდგინედ ასრულებს. ',
          'დავალებებს ასრულებს, ხელს საგაკვეთილო პროცესს არ უშლის, მაგრამ ძალიან უყვარს ლაპარაკი,რაც პრობლემებს ქმნის ხოლმე.',
          'ზოგადად ადეკვატურად იქცევა, მაგრად ხანდახან გაუხვევს ხოლმე ჩვეული გზიდან, ერთადერთი დიდი მინუსი აქვს,რომ დავალებებს ბოლომდე არ ასრულებს ხოლმე. ',
        ]
      : [
          'mostly is involved during lesson but something steps off the road and doesnt listen to teachers.',
          'isnt known for nor good behaviour nor bad one, can be one of the best student if improves the attitude and become more disciplined.',
          'sometimes will join others in not very appropriate activities during the lessons, but in total doesnt behave badly. Always finishes the task fully, so thats a plus. ',
          'Completes tasks,doesnt bother anyone ,but likes to talk way too much , that can be problem somethimes.',
          'Normally behaves well but he has one big minus: doesnt finish tasks fully.',
        ],
    goodBehavior: isGeorgian
      ? [
          'გამოირჩება შესანიშნავი ყოფაქცევით, სულ გულმოდგინედ ისმენს და ასრულებს დავალებებს.',
          'არაჩვეულებრივი ყოფაქცევით გამოირჩება, არ ხმაურობს, არავის ხელს არ უშლის და საქმეს სერიოზულად ეკიდება ყოველთვის.',
          'სამაგალითოა როცა ყოფაქცევას ეხება საქმე, არ იშურებს არც ენერგიას ცურვისას და არც მასწავლებლის მოსმენისას.',
          'გულმოდგინედ ასრულებს დავალებებს, არაფერს არ იზარებს, არის შრომისმოყვარე და ძალიან ზრდილობიანი.',
          'არის დახვეწილი მანერების მქონე, პატივისცემით ეპყრობა ყველას მათ შორის ცურვის დავალებებსაც,რომელთაც მუდმივად ალალად ასრულებს.',
        ]
      : [
          'has excellent behaviour, always listening and completing the tasks.',
          'is known for excellent behaviour,never loud,never bothers anyone,always serious about swimming.',
          'is exemplary when it comes to behaviour, always full of energy,ready to work hard.',
          'Truthfully completes all the tasks, never lazy , very hardworking and polite.',
          'is very polite and respectful, never shys away from swimming and working hard.',
        ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') {
      setError(isGeorgian ? 'სახელი აუცილებელია' : 'Name is required');
      return;
    }

    const randomTextIndex = Math.floor(Math.random() * 5);
    const selectedBehaviorText =
      behaviorTextVariations[swimmingBehaviorGrade][randomTextIndex];
    const selectedSkillText =
      skillTextVariations[swimmingSkillGrade][randomTextIndex];
    setGeneratedText(
      `${name} ${selectedBehaviorText} ${name} ${selectedSkillText}`
    );
    setIsCopied(false); // Reset the copy status
  };

  const copyGeneratedText = () => {
    navigator.clipboard.writeText(generatedText).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000); // Show "Copied" for 1 second
    });
  };

  useEffect(() => {
    return () => {
      // Cleanup timeout if the component unmounts
      clearTimeout();
    };
  }, [isCopied]);

  return (
    <div className="container">
      <section className="result">
        {generatedText ? (
          <p>
            {isCopied
              ? isGeorgian
                ? 'დაკოპირებულია'
                : 'Copied'
              : generatedText}
          </p>
        ) : (
          <p>
            {isGeorgian
              ? 'აქ დაგენერირდება მოსწავლეთა შეფასების ტექსტი'
              : 'Generating student evaluation text here'}
          </p>
        )}
        <i onClick={copyGeneratedText} className="fa-regular fa-copy"></i>
      </section>
      <form onSubmit={handleSubmit} noValidate>
        <label className="custom-field">
          <input
            type="text"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (e.target.value.trim() !== '') {
                setError('');
              }
            }}
          />
          <span className="custom-placeholder">
            {isGeorgian ? 'სახელი' : 'Name'}
          </span>
          {error && <div className="error-message">{error}</div>}
        </label>
        <section className="grades">
          <label className="skill">
            {isGeorgian ? 'ცურვის დონე:' : 'Swimming Grade:'}
          </label>
          <select
            value={swimmingSkillGrade}
            onChange={(e) => setSwimmingSkillGrade(e.target.value)}
          >
            <option value="badSkill">{isGeorgian ? 'ცუდი' : 'Bad'}</option>
            <option value="normalSkill">
              {isGeorgian ? 'ნორმალური' : 'Average'}
            </option>
            <option value="goodSkill">{isGeorgian ? 'კარგი' : 'Good'}</option>
          </select>
          <label>{isGeorgian ? 'ყოფაქცევის დონე:' : 'Behaviour Grade:'}</label>
          <select
            value={swimmingBehaviorGrade}
            onChange={(e) => setSwimmingBehaviorGrade(e.target.value)}
          >
            <option value="badBehavior">{isGeorgian ? 'ცუდი' : 'Bad'}</option>
            <option value="normalBehavior">
              {isGeorgian ? 'ნორმალური' : 'Average'}
            </option>
            <option value="goodBehavior">
              {isGeorgian ? 'კარგი' : 'Good'}
            </option>
          </select>
        </section>
        <button className="sbmBTN" type="submit">
          {isGeorgian ? 'შეფასების დაგენერირება' : 'Generate Text'}
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
